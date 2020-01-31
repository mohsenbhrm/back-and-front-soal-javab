﻿using System;
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

namespace SoalJavab.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("CorsPolicy")]
    [Authorize]
    public class UserReshtehController : ControllerBase
    {
        private IUsersService _user;
        private IReshtehServices _reshteh;
        private IZirReshtehServices _zirReshteh;

        public UserReshtehController (IUsersService usersService,IReshtehServices reshtehServices,IZirReshtehServices zirReshteh)
        {
            _user = usersService;
            _reshteh = reshtehServices;
            _zirReshteh = zirReshteh;
        }

        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {var user = _user.GetCurrentUserId();
        var s =_zirReshteh.GetByUser(user);
            return Ok(s);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(long id)
        {
            return Ok();
        }
        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] long[] Id)
        {
            if (!_zirReshteh.ValidateZirreshteh(Id)) return BadRequest();
            return Ok();
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
