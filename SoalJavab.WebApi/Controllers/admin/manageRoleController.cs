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
    public class roleController : ControllerBase
    {
        private IRoleAdminService _roles;

        public roleController(IRoleAdminService role)
        {
            _roles = role;
        }
        // make all data for create question page such as list of #Reshteh and #ZirReshteh  
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                return Ok(await _roles.GetAllAsync());
            }
            catch { return BadRequest(); }
        }
        [HttpPost("[action]")]
        [IgnoreAntiforgeryToken]
        public async Task<IActionResult> search([FromBody] nameobj name)
        {
            try
            {
                return Ok(await _roles.searchRoleAsync(name.src));
            }
            catch { return BadRequest(); }
        }
        
        
    }
}