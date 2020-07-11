using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using SoalJavab.DataLayer;
using SoalJavab.DomainClasses;
using SoalJavab.Services;
using Microsoft.Extensions.Options;


namespace SoalJavab.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly IWebMailService _webMailService;
        private readonly IOptionsSnapshot<SmtpConfig> _smtpConfig;
        private readonly IServiceScopeFactory _scopeFactory;
        private IUsersService _users;
        private IRolesService _role;
        private readonly ISecurityService _securityService;

        public ValuesController(
            IWebMailService webMailService,
            IOptionsSnapshot<SmtpConfig> smtpConfig, // will be provided from the `appsettings.json` file.

         IRolesService IRolesService,
         IUsersService usersService,
         IServiceScopeFactory scopeFactory,
         ISecurityService securityService)
        {
            _scopeFactory = scopeFactory;
            _users = usersService;
            _role = IRolesService;
            _webMailService = webMailService;
            _smtpConfig = smtpConfig;

        }
        // GET api/values
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                // await _webMailService.SendEmailAsync(
                //                            smtpConfig: _smtpConfig.Value,
                //                            emails: new List<MailAddress>
                //                            {
                //                 new MailAddress { ToName = "mohsen", ToAddress = "moh.bahrami.2009@gmail.com" },
                //                                // ...
                //                            },
                //                            subject: "Hello!",
                //                            message: "Hello!<br/> This is an email from us!");
                return Ok();
            }
            catch (Exception e)
            {
                throw new Exception(e.ToString());
            }

        }





        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult GetAsync(long id)
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
