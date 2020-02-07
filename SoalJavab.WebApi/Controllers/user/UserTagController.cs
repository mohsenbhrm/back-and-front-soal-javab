using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using SoalJavab.DataLayer;
using SoalJavab.DomainClasses;
using SoalJavab.Services;
using SoalJavab.Services.Contracts;
using SoalJavab.Services.Models;

namespace SoalJavab.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("CorsPolicy")]
    [Authorize]
    public class UserTagController : ControllerBase
    {
        private IUsersService _user;
        private ITagServices _tag;

        public UserTagController(IUsersService usersService, ITagServices tag)
        {
            _user = usersService;
            _tag = tag;
        }

        // GET api/values
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var user =await _user.GetCurrentUserAsync();
            var s =await _tag.GetByUserAsync(user);
            return Ok(s);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(long id)
        {
            return Ok();
        }
        // POST api/values
        [IgnoreAntiforgeryToken]
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] userTagVm tagVm)
        {
            var Id = tagVm.Id;
            if (!_tag.ValidateTag(Id)) return BadRequest(new JsonResult("مقادیر نامعتر هستند"));
            var result = await _tag.AddTagUserAsync(Id);
            if (result) return Ok();
            return BadRequest(new JsonResult("در حین کار خطایی رخ داده است"));
        }


        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(long id, [FromBody] string value)
        {

        }
        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(long id)
        {
        }
    }
}
