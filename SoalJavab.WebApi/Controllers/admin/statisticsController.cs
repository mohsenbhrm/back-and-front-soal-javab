using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using SoalJavab.Services.Contracts;
using SoalJavab.Services;
using SoalJavab.Services.Admin;
using SoalJavab.Services.Models.admin;
using System.Threading.Tasks;

namespace SoalJavab.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class statisticsController : ControllerBase
    {
        private IstatisticsService _sta;

        public statisticsController(IstatisticsService sta)
        {
            _sta = sta;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsersCount()
        {
            try
            {
                return Ok(await _sta.usersCount());
            }
            catch { return BadRequest(); }
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetSoalsCount()
        {
            try
            {
                return Ok(await _sta.soalsCount());
            }
            catch { return BadRequest(); }
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetJavabsCount()
        {
            try
            {
                return Ok(await _sta.javabsCount());
            }
            catch { return BadRequest(); }
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> GetTagsCount()
        {
            try
            {
                return Ok(await _sta.tagsCount());
            }
            catch { return BadRequest(); }
        }
    }
}