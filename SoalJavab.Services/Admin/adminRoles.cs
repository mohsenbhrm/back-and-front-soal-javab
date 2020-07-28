using System;
using System.Security.Claims;
using System.Threading.Tasks;
using SoalJavab.Common;
using System.Linq;
using SoalJavab.DataLayer;
using SoalJavab.DomainClasses;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using SoalJavab.Services.Models.admin;
using SoalJavab.Services.Contracts;
using SoalJavab.Services;

namespace SoalJavab.Services.Admin
{
    public interface IRoleAdminService
    {
        Task<long> getCountAsync { get; }

        Task addRoleAsync(RoleVm role);
        Task addRoleAsync(IList<RoleVm> role);
        Task<List<RoleVm>> GetAllAsync();
        Task<List<RoleVm>> searchRoleAsync(string name);
    }

    public class roleAdminService : IRoleAdminService
    {
        private readonly IUnitOfWork _uow;
        private readonly DbSet<Role> _role;
        private readonly ISecurityService _securityService;
        private readonly IUsersService _usersService;
        private readonly IHttpContextAccessor _contextAccessor;

        public roleAdminService(
            IUnitOfWork uow,
            ISecurityService securityService,
            IHttpContextAccessor contextAccessor,
            IUsersService usersService
            )
        {
            _uow = uow;
            _uow.CheckArgumentIsNull(nameof(_uow));

            _role = _uow.Set<Role>();

            _securityService = securityService;
            _securityService.CheckArgumentIsNull(nameof(_securityService));
            _usersService = usersService;
            _usersService.CheckArgumentIsNull(nameof(_usersService));
            _contextAccessor = contextAccessor;
            _contextAccessor.CheckArgumentIsNull(nameof(_contextAccessor));
        }
        public Task<long> getCountAsync => _role.LongCountAsync();
        public Task<List<RoleVm>> GetAllAsync()
        {
            var s = _role
            .Select(x => new RoleVm
            {
                Id = x.Id,
                RoleName= x.Name,
            }).ToListAsync();
            return s;
        }

        public Task addRoleAsync(RoleVm role)
        {
           return  _role.AddAsync(new Role {
                Id = role.Id,
                Name = role.RoleName,
            });
        }
        public async Task addRoleAsync(IList<RoleVm> role)
        {
            foreach (var i in role)
            {
               await addRoleAsync(i);
            }
            await _uow.SaveAllChangesAsync();
        }

         public Task<List<RoleVm>> searchRoleAsync(string name)
        {
            return  _role.Where(x=>x.Name.Contains(name)).Select(i=> new RoleVm {
                Id =i.Id,
                RoleName = i.Name
            }).ToListAsync();
        }  
    }
}

