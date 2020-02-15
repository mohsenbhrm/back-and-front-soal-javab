using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using SoalJavab.Services.Contracts;
using SoalJavab.Services.Admin;
using System.Threading.Tasks;

namespace SoalJavab.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles="Admin")]
    public class manageSoalsController : ControllerBase
    {
        private ISoalAdminService _soals;

        public manageSoalsController(ISoalAdminService soalAdminService)
        {
            _soals = soalAdminService;
        }
        // make all data for create question page such as list of #Reshteh and #ZirReshteh  
        [HttpGet]
        public async Task <IActionResult> Get()
        {
            try
            {
                return Ok(await _soals.GetAllAsync());
            }
            catch { return BadRequest(); }
        }
        [HttpDelete]
        public async Task<IActionResult> Delete(long id)
        {
            try
            {
                 if (await _soals.DeleteAsync(id)) return Ok();
                return BadRequest();
            }
            catch { return StatusCode(500); }
        }
    }
}