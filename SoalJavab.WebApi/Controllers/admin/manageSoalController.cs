using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using SoalJavab.Services.Contracts;
using SoalJavab.Services.Admin;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;


namespace SoalJavab.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin,manager")]
    [EnableCors("CorsPolicy")]

    public class manageSoalsController : ControllerBase
    {
        private ISoalAdminService _soals;

        public manageSoalsController(ISoalAdminService soalAdminService)
        {
            _soals = soalAdminService;
        }
        // make all data for create question page such as list of #Reshteh and #ZirReshteh  
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                return Ok(await _soals.GetAllAsync());
            }
            catch { return BadRequest(); }
        }
        [HttpDelete("{id}")]
        [IgnoreAntiforgeryToken]
        public async Task<IActionResult> Delete(long id)
        {
            try
            {
                if (await _soals.DeleteAsync(id)) return Ok(await _soals.GetAllAsync());
                return BadRequest();
            }
            catch { return StatusCode(500); }
        }

        [HttpPut("{id}")]
        [IgnoreAntiforgeryToken]

        public async Task<IActionResult> Put(long id)
        {
            try
            {
                if (await _soals.undoDeletedAsync(id)) return Ok(await _soals.GetAllAsync());
                return BadRequest();
            }
            catch { return StatusCode(500); }

        }
    }
}