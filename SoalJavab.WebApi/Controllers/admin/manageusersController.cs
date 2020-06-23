using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using SoalJavab.Services.Contracts;
using SoalJavab.Services;
using SoalJavab.Services.Admin;
using SoalJavab.Services.Models.admin;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;

namespace SoalJavab.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin,manager")]
    [EnableCors("CorsPolicy")]  
    public class manageUsersController : ControllerBase
    {
        private IUsersAdminService _users;

        public manageUsersController(IUsersAdminService users)
        {
            _users = users;
        }
        // make all data for create question page such as list of #Reshteh and #ZirReshteh  
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                return Ok(await _users.GetAllAsync());
            }
            catch { return BadRequest(); }
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> GetNewInDay()
        {
            try
            {
                return Ok(await _users.SignupInDayAsync());
            }
            catch { return BadRequest(); }
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> GetNewInMounth()
        {
            try
            {
                return Ok(await _users.SignupInMounthAsync());
            }
            catch { return BadRequest(); }
        }
        [HttpPost("[action]")]
        [IgnoreAntiforgeryToken]
        public async Task<IActionResult> UserBan([FromBody] JsonVm user)
        {
            try
            {
                return Ok(await _users.BanAsync(user.Id));
            }
            catch { return BadRequest(); }
        }
        [HttpPost("[action]")]
        [IgnoreAntiforgeryToken]
        public async Task<IActionResult> UserUnBan([FromBody] JsonVm user)
        {
            try
            {
                return Ok(await _users.BanAsync(user.Id));
            }
            catch { return BadRequest(); }
        }
        [HttpPost("[action]")]
        [IgnoreAntiforgeryToken]
        public async Task<IActionResult> ChangeRole([FromBody] UserRoleVm userRole)
        {
            await _users.ChangeRole(userRole);
            return Ok();

        }
    }
}