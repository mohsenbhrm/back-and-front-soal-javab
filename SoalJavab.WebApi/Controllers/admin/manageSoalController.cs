using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using SoalJavab.Services.Contracts;
using SoalJavab.Services.Admin;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;


namespace SoalJavab.WebApi.Controllers.admin
{
    [Route("api/admin/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin,manager")]
    [EnableCors("CorsPolicy")]

    public class SoalsController : ControllerBase
    {
        private ISoalAdminService _soals;

        public SoalsController(ISoalAdminService soalAdminService)
        {
            _soals = soalAdminService;
        }
        // make all data for create question page such as list of #Reshteh and #ZirReshteh  
        [HttpGet, HttpGet("{pageId}")]
        public async Task<IActionResult> Get(int pageId = 0)
        {
            try
            {
                var q = await _soals.GetAllAsync(false, pageId);
                if (q.Count > 0) return Ok(q);
                return NotFound();
            }
            catch { return BadRequest(); }
        }
        [HttpGet("[action]"), HttpGet("[action]/{pageId}")]
        public async Task<IActionResult> GetAllDeleted(int pageId = 0)
        {
            try
            {
                var q = await _soals.GetAllAsync(true, pageId);
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
                return Ok(await _soals.getCountAsync);
            }
            catch { return BadRequest(); }
        }
        [HttpDelete("{id}")]
        [IgnoreAntiforgeryToken]
        public async Task<IActionResult> Delete(long id)
        {
            try
            {
                if (await _soals.DeleteAsync(id)) return Ok();
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
                if (await _soals.undoDeletedAsync(id)) return Ok();
                return BadRequest();
            }
            catch { return StatusCode(500); }

        }
    }
}