using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using SoalJavab.Services.Contracts;
using SoalJavab.Services.Admin;
using System.Threading.Tasks;
using SoalJavab.Services.Models.admin;
using Microsoft.AspNetCore.Cors;

namespace SoalJavab.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin,manager")]
    [EnableCors("CorsPolicy")]
    public class manageTagsController : ControllerBase
    {
        private ITagAdminServices _tags;

        public manageTagsController(ITagAdminServices tags)
        {
            _tags = tags;
        }
        // make all data for create question page such as list of #Reshteh and #ZirReshteh  
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                return Ok(await _tags.GetAllAsync());
            }
            catch { return BadRequest("nnjnjnj"); }
        }
        [HttpGet("[action]")]
        public async Task<IActionResult> GetDeleted()
        {
            try
            {
                var q = await _tags.GetAllDeletedsAsync();
                return Ok(q);
            }
            catch { return StatusCode(500); }
        }

        [HttpPut("{id}")]
        [IgnoreAntiforgeryToken]
        public async Task<IActionResult> Put(long id, [FromBody] JsonVm item)
        {
            try
            {
                await _tags.updateAsync(item);
                return Ok();
            }
            catch { return BadRequest(); }
        }

        [HttpDelete("{id}")]
        [IgnoreAntiforgeryToken]
        public async Task<IActionResult> Delete(long id)
        {
            try
            {
                if (await _tags.DeleteAsync(id)) return Ok();
                return BadRequest();
            }
            catch { return StatusCode(500); }
        }

    }
}