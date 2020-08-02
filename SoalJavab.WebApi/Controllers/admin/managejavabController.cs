using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using SoalJavab.Services.Contracts;
using SoalJavab.Services.Admin;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using System;

namespace SoalJavab.WebApi.Controllers.admin
{
    [Route("api/admin/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin,manager")]
    [EnableCors("CorsPolicy")]
    public class JavabController : ControllerBase
    {
        private IJavbAdminService _javabs;

        public JavabController(IJavbAdminService javbAdmin)
        {
            _javabs = javbAdmin;
        }
        // make all data for create question page such as list of #Reshteh and #ZirReshteh  
        [HttpGet("{pageId}"),HttpGet]
        public async Task<IActionResult> Get(int pageId=0)
        {
            try
            {
                var q = await _javabs.GetAllAsync(pageId);
                if (q.Count > 0) return Ok(q);
                return NotFound();
            }
            catch { return BadRequest(); }
        }
         [HttpGet("[action]/{pageId}"),HttpGet("[action]")]
        public async Task<IActionResult> GetAllDeleted(int pageId=0)
        {
            try
            {
                var q = await _javabs.GetAllDeletedAsync(pageId);
                if (q.Count > 0) return Ok(q);
                return NotFound();
            }
            catch 
            { return BadRequest(); }
        }
        [HttpDelete("{id}")]
        [IgnoreAntiforgeryToken]
        public async Task<IActionResult> Delete(long id)
        {
            try
            {
                 if (await _javabs.DeleteAsync(id)) return Ok();
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
                if (await _javabs.undoDeletedAsync(id)) return Ok();
                return BadRequest();
            }
            catch { return StatusCode(500); }

        }
    }
}