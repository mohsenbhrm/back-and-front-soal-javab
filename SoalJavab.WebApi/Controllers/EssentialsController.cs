using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using SoalJavab.Services.Contracts;
using Microsoft.AspNetCore.Cors;
using SoalJavab.Services;
using System.Threading.Tasks;
using SoalJavab.Services.Admin;

namespace SoalJavab.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("CorsPolicy")]
    [Authorize]
    public class EssentialsController : ControllerBase
    {
        private IstatisticsService _sta;

        public EssentialsController(IstatisticsService sta )
        {            
            _sta = sta;
        }
        // make all data for create question page such as list of #Reshteh and #ZirReshteh  
        [HttpPost("[action]")]
        [IgnoreAntiforgeryToken]
        public async Task<IActionResult> search([FromBody] nameobj name)
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