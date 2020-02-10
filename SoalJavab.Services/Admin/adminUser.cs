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
using SoalJavab.Services.Models;
using SoalJavab.Services.Contracts;

namespace SoalJavab.Services.Admin
{
    public interface IUsersAdminService
    {
        Task<bool> BanUser(long id);
        Task<List<UserVm>> GetAllusers();
        Task<List<UserVm>> SignupUserinMounth();
        Task<List<UserVm>> SignupUserinToday();
        Task<bool> UnBanUser(long id);
    }

    public class UsersAdminService : IUsersAdminService
    {
        private readonly IUnitOfWork _uow;
        private readonly DbSet<ApplicationUser> _users;
        private readonly ISecurityService _securityService;
        private readonly IUsersService _usersService;
        private readonly IHttpContextAccessor _contextAccessor;

        public UsersAdminService(
            IUnitOfWork uow,
            ISecurityService securityService,
            IHttpContextAccessor contextAccessor,
            IUsersService usersService
            )
        {
            _uow = uow;
            _uow.CheckArgumentIsNull(nameof(_uow));

            _users = _uow.Set<ApplicationUser>();

            _securityService = securityService;
            _securityService.CheckArgumentIsNull(nameof(_securityService));
            _usersService = usersService;
            _usersService.CheckArgumentIsNull(nameof(_usersService));
            _contextAccessor = contextAccessor;
            _contextAccessor.CheckArgumentIsNull(nameof(_contextAccessor));
        }

        public Task<List<UserVm>> GetAllusers()
        {
            var s = _users.Select(x => new UserVm
            {
                FullName = x.FullName,
                UserName = x.Username,
                IsActive = x.IsActive,
                Ban = x.Ban,
                Address = x.Address.State + " " + x.Address.City,
                LastLogin = x.LastLoggedIn
            }).ToListAsync();
            return s;
        }

        public async Task<bool> BanUser(long id)
        {
            try
            {
                var s = await _users.FindAsync(id);
                s.Ban = true;
                var d = await _uow.SaveAllChangesAsync();
                return true;
            }
            catch { return false; }
        }
        public Task<List<UserVm>> SignupUserinToday()
        {
            var s = _users.Where(c => c.Regdate.Date == DateTime.Now.Date)
            .Select(x => new UserVm
            {
                FullName = x.FullName,
                UserName = x.Username,
                IsActive = x.IsActive,
                Ban = x.Ban,
                Address = x.Address.State + " " + x.Address.City,
                LastLogin = x.LastLoggedIn
            }).ToListAsync();
            return s;
        }
        public Task<List<UserVm>> SignupUserinMounth()
        {
            var s = _users.Where(c => c.Regdate.Year == DateTime.Now.Year && c.Regdate.Month == DateTime.Now.Month)
            .Select(x => new UserVm
            {
                FullName = x.FullName,
                UserName = x.Username,
                IsActive = x.IsActive,
                Ban = x.Ban,
                Address = x.Address.State + " " + x.Address.City,
                LastLogin = x.LastLoggedIn
            }).ToListAsync();
            return s;
        }
        public async Task<bool> UnBanUser(long id)
        {
            try
            {
                var s = await _users.FindAsync(id);
                s.Ban = false;
                await _uow.SaveAllChangesAsync();
                return true;
            }
            catch { return false; }
        }



    }
}
public class UserVm
{
    public string UserName { set; get; }
    public string FullName { set; get; }
    public DateTimeOffset? LastLogin { set; get; }
    public bool IsActive { set; get; }
    public bool Ban { set; get; }
    public string Address { set; get; }
    public string Image { get; set; }
}