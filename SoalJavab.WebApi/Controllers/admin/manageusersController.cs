using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using SoalJavab.Services.Contracts;
using SoalJavab.Services;
using SoalJavab.Services.Admin;
using SoalJavab.Services.Models.admin;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;

namespace SoalJavab.WebApi.Controllers.admin
{
    [Route("api/admin/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin,manager")]
    [EnableCors("CorsPolicy")]
    public class UsersController : ControllerBase
    {
        private IUsersAdminService _users;

        public UsersController(IUsersAdminService users)
        {
            _users = users;
        }
        // make all data for create question page such as list of #Reshteh and #ZirReshteh  
        // [HttpGet]
        // public async Task<IActionResult> Get()
        // {
        //     try
        //     {
        //         return Ok(await _users.GetAllAsync());
        //     }
        //     catch { return BadRequest(); }
        // }
        [HttpGet("{pageId}"), HttpGet]
        public async Task<IActionResult> Get(int pageId = 0)
        {
            try
            {
                var q = await _users.GetAllAsync(false, pageId);
                if (q.Count > 0) return Ok(q);
                return NotFound();

            }
            catch { return BadRequest(); }
        }
        [HttpGet("[action]/{pageId}"), HttpGet("[action]")]
        public async Task<IActionResult> GetAllDeleted(int pageId = 0)
        {
            try
            {
                var q = await _users.GetAllAsync(true, pageId);
                if (q.Count > 0) return Ok(q);
                return NotFound();
            }
            catch { return BadRequest(); }
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> GetCount()
        {
            try
            {
                return Ok(await _users.getCountAsync);
            }
            catch { return BadRequest(); }
        }

        [HttpGet("[action]/{pageId}")]
        public async Task<IActionResult> GetNewInDay(int pageId = 0)
        {
            try
            {
                return Ok(await _users.SignupInDayAsync());
            }
            catch { return BadRequest(); }
        }
        [HttpGet("[action]/{pageId}")]
        public async Task<IActionResult> GetNewInMounth(int pageId = 0)
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
                return Ok(await _users.UnBanAsync(user.Id));
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