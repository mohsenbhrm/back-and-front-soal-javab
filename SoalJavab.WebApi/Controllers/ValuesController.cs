using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using SoalJavab.DataLayer;
using SoalJavab.DomainClasses;
using SoalJavab.Services;

namespace SoalJavab.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly IServiceScopeFactory _scopeFactory;

        private IUsersService _users;
        private IRolesService _role;
        private readonly ISecurityService _securityService;

        public ValuesController (
         IRolesService IRolesService,
         IUsersService usersService,
         IServiceScopeFactory scopeFactory,
         ISecurityService securityService)
        {
            _scopeFactory = scopeFactory;
            _users = usersService;
            _role = IRolesService;
            _securityService = securityService;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Ok();
        }







        // GET api/values/5
        [HttpGet("{id}")]
        public  IActionResult GetAsync(long id)
        {

            return Ok(id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
