using System.Security.Claims;
using System.Threading.Tasks;
using SoalJavab.Common;
using SoalJavab.DataLayer;
using SoalJavab.DomainClasses;
using SoalJavab.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using SoalJavab.Services.Models;
using SoalJavab.Services.Contracts;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace SoalJavab.WebApi.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("CorsPolicy")]

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class AccountController : Controller
    {
        private readonly IZirReshtehServices _zirreshteh;
        private readonly ITagServices _Tags;
        private readonly IUsersService _usersService;
        private readonly ITokenStoreService _tokenStoreService;
        private readonly IUnitOfWork _uow;
        private readonly IAntiForgeryCookieService _antiforgery;
        private readonly ITokenFactoryService _tokenFactoryService;

        public AccountController(
            IUsersService usersService,
            ITokenStoreService tokenStoreService,
            ITokenFactoryService tokenFactoryService,
            IUnitOfWork uow,
            IAntiForgeryCookieService antiforgery,
            ITagServices tagServices,
            IZirReshtehServices zirReshteh
            )
        {
            _zirreshteh = zirReshteh;
            _Tags = tagServices;
            _usersService = usersService;
            _usersService.CheckArgumentIsNull(nameof(usersService));

            _tokenStoreService = tokenStoreService;
            _tokenStoreService.CheckArgumentIsNull(nameof(tokenStoreService));

            _uow = uow;
            _uow.CheckArgumentIsNull(nameof(_uow));

            _antiforgery = antiforgery;
            _antiforgery.CheckArgumentIsNull(nameof(antiforgery));

            _tokenFactoryService = tokenFactoryService;
            _tokenFactoryService.CheckArgumentIsNull(nameof(tokenFactoryService));
        }

        [AllowAnonymous]
        [IgnoreAntiforgeryToken]
        [HttpPost("[action]")]
        public async Task<IActionResult> Login([FromBody]  LoginVm loginUser)
        {
            if (loginUser == null)
            {
                return BadRequest("user is not set.");
            }

            var user = await _usersService.FindUserAsync(loginUser.username, loginUser.password);
            if (user == null || !user.IsActive)
            {
                return Unauthorized();
            }
            user.OldLoggedIn = user.LastLoggedIn;
            var result = await _tokenFactoryService.CreateJwtTokensAsync(user);
            await _tokenStoreService.AddUserTokenAsync(user, result.RefreshTokenSerial, result.AccessToken, null);
            await _uow.SaveChangesAsync();

            _antiforgery.RegenerateAntiForgeryCookies(result.Claims);

            return Ok(new { access_token = result.AccessToken, refresh_token = result.RefreshToken });
        }

        [AllowAnonymous]
        [HttpPost("[action]")]
        public async Task<IActionResult> RefreshToken([FromBody]JToken jsonBody)
        {
            var refreshTokenValue = jsonBody.Value<string>("refreshToken");
            if (string.IsNullOrWhiteSpace(refreshTokenValue))
            {
                return BadRequest("refreshToken is not set.");
            }

            var token = await _tokenStoreService.FindTokenAsync(refreshTokenValue);
            if (token == null)
            {
                return Unauthorized();
            }

            var result = await _tokenFactoryService.CreateJwtTokensAsync(token.User);
            await _tokenStoreService.AddUserTokenAsync(token.User, result.RefreshTokenSerial, result.AccessToken, _tokenFactoryService.GetRefreshTokenSerial(refreshTokenValue));
            await _uow.SaveChangesAsync();

            _antiforgery.RegenerateAntiForgeryCookies(result.Claims);

            return Ok(new { access_token = result.AccessToken, refresh_token = result.RefreshToken });
        }

        [AllowAnonymous]
        [HttpGet("[action]")]
        public async Task<bool> Logout(string refreshToken)
        {
            var claimsIdentity = this.User.Identity as ClaimsIdentity;
            var userIdValue = claimsIdentity.FindFirst(ClaimTypes.UserData)?.Value;

            // The Jwt implementation does not support "revoke OAuth token" (logout) by design.
            // Delete the user's tokens from the database (revoke its bearer token)
            await _tokenStoreService.RevokeUserBearerTokensAsync(userIdValue, refreshToken);
            await _uow.SaveChangesAsync();

            _antiforgery.DeleteAntiForgeryCookies();

            return true;
        }

        [HttpGet("[action]"), HttpPost("[action]")]
        public bool IsAuthenticated()
        {
            return User.Identity.IsAuthenticated;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetUserInfo()
        {
            var claimsIdentity = User.Identity as ClaimsIdentity;
            // var q = _zirreshteh.GetByUser(_usersService.GetCurrentUserId());
            var q =await _Tags.GetByUserAsync(await _usersService.GetCurrentUserAsync());
            // var q = _Tags.GetByUser(_usersService.GetCurrentUserId());
            if (q!=null)
            return Json(new
            {
                Username = claimsIdentity.Name,
                Tags = q
            });
            return Json(new
            {
                Username = claimsIdentity.Name,
                Tags = " "
            });
        }

        [AllowAnonymous]
        [IgnoreAntiforgeryToken]
        [HttpPost("[action]")]
        public async Task<IActionResult> SignUp([FromBody] SignUpVm signUp)
        {
            var us = await _usersService.isUserNameExcist(signUp.Username);
            if (us)
            { return BadRequest(new JsonResult("نام کاربری تکراری است")); }
            var q = await _usersService.AddNewUserAsync(signUp);
            return await Login(q);
        }

        [HttpPost("[action]")]
        [Authorize]
        [IgnoreAntiforgeryToken]
        public async Task<IActionResult> ChangePassword([FromBody] changepassword password)
        {
            var user = await _usersService.GetCurrentUserAsync();
            var (b, error) = await _usersService.ChangePasswordAsync(user, password.CurrentPassword, password.NewPassword);
            if (b)
                return Ok();
            return BadRequest(error);
        }
    }
}