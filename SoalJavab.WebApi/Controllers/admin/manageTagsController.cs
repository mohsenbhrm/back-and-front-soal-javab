using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using SoalJavab.Services.Contracts;
using SoalJavab.Services.Admin;
using System.Threading.Tasks;
using SoalJavab.Services.Models.admin;
using Microsoft.AspNetCore.Cors;
using SoalJavab.Common;

namespace SoalJavab.WebApi.Controllers.admin
{
    [Route("api/admin/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin,manager")]
    [EnableCors("CorsPolicy")]
    public class TagsController : ControllerBase
    {
        private ITagAdminServices _tags;

        public TagsController(ITagAdminServices tags)
        {
            _tags = tags;
            _tags.CheckArgumentIsNull(nameof(_tags));
        }
        // make all data for create question page such as list of #Reshteh and #ZirReshteh  
        
        [HttpGet("{pageId}"),HttpGet]
        public async Task<IActionResult> Get(int pageId=0)
        {
            try
            {var q = await _tags.GetAllAsync(pageId);
                if (q.Count > 0) return Ok(q);
                return NotFound();
            }
            catch { return BadRequest(); }
        }
        [HttpGet("[action]"),HttpGet("[action]/{pageId}")]
        public async Task<IActionResult> GetDeleted(int pageId=0)
        {
            try
            {
                var q = await _tags.GetAllDeletedsAsync(pageId);
                if (q.Count > 0) return Ok(q);
                return NotFound();
            }
            catch { return StatusCode(500); }
        }

        // [HttpPut("{id}")]
        // [IgnoreAntiforgeryToken]
        // public async Task<IActionResult> Put(long id, [FromBody] JsonVm item)
        // {
        //     try
        //     {
        //         await _tags.updateAsync(item);
        //         return Ok();
        //     }
        //     catch { return BadRequest(); }
        // }

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
        // [HttpDelete("[action]")]
        // [IgnoreAntiforgeryToken]
        // public async Task<IActionResult> Delete([FromBody] long item)
        // {
        //     try
        //     {
        //         if (await _tags._DeleteOrUndoRangeAsync(item,true)) return Ok();
        //         return BadRequest();
        //     }
        //     catch { return StatusCode(500); }
        // }
        [HttpPut("{id}")]
        [IgnoreAntiforgeryToken]
        public async Task<IActionResult> Put(long id)
        {
            try
            {
                if (await _tags._DeleteOrUndoRangeAsync(id,false)) return Ok();
                return BadRequest();
            }
            catch { return StatusCode(500); }
        }
    } 
   
}