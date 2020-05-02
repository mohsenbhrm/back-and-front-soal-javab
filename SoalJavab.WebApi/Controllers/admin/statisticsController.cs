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
    [EnableCors("CorsPolicy")]
    [Authorize(Roles = "Admin,manager")]
    public class statisticsController : ControllerBase
    {
        private IstatisticsService _sta;

        public statisticsController(IstatisticsService sta)
        {
            _sta = sta;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                return Ok(await _sta.get());
            }
            catch { return BadRequest(); }
        }

        [HttpPost]
        [IgnoreAntiforgeryToken]
        public async Task<IActionResult> search([FromBody] string name)
        {
            try
            {
                return Ok(await _sta.search(name));
            }
            catch { return BadRequest(); }
        }
        [HttpPost("[action]")]
        [IgnoreAntiforgeryToken]
        public async Task<IActionResult> search2([FromBody] nameobj name)
        {
            try
            {
                return Ok(await _sta.search(name.src));
            }
            catch { return BadRequest(); }
        }
        
    }
    public class nameobj {
       public string src {set;get;}
    }
}