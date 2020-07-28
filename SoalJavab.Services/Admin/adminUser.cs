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
    public interface IUsersAdminService
    {
        Task<long> signUpInMounthCountAsync { get; }
        Task<long> signupInDayCountAsync { get; }
        Task<long> getCountAsync { get; }

        Task<bool> BanAsync(long id);
       // Task<List<UserVm>> GetAllAsync();
        Task<List<UserVm>> SignupInMounthAsync();
        Task<List<UserVm>> SignupInDayAsync();
        Task<bool> UnBanAsync(long id);
        Task ChangeRole(UserRoleVm userRole);
        Task<List<UserVm>> GetAllAsync(
            bool isBanList,
            int pageId = 0);
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
        public Task<List<UserVm>> GetAllAsync(bool isBanList = false,int pageId = 0)
        {
            var s = _users.Where(d => d.Ban == isBanList).OrderByDescending(i=>i.Id)
            .Include(ur => ur.UserRoles)
                    .ThenInclude(rl => rl.Role)
            .Select(x => new UserVm
            {
                Id = x.Id,
                FullName = x.FullName,
                UserName = x.Username,
                IsActive = x.IsActive,
                Ban = x.Ban,
                Address = x.Address.State + " " + x.Address.City,
                LastLogin = x.LastLoggedIn.ToString(),
                role = x.UserRoles.Select(f => f.Role).ToList()
            }).Skip(pageId * myParams.pageSize).Take(myParams.pageSize).ToListAsync();
            return s;
        }
        public Task<List<UserVm>> GetAllBanedAsync(int pageId = 0)
        {
            var s = _users.Where(d => d.Ban).OrderByDescending(i => i.Id)
            .Include(ur => ur.UserRoles)
                    .ThenInclude(rl => rl.Role)
            .Select(x => new UserVm
            {
                Id = x.Id,
                FullName = x.FullName,
                UserName = x.Username,
                IsActive = x.IsActive,
                Ban = x.Ban,
                Address = x.Address.State + " " + x.Address.City,
                LastLogin = x.LastLoggedIn.ToString(),
                role = x.UserRoles.Select(f => f.Role).ToList()
            }).Skip(pageId * myParams.pageSize).Take(myParams.pageSize).ToListAsync();
            return s;
        }

        public Task<long> getCountAsync => _users.LongCountAsync();

        public async Task<bool> BanAsync(long id)
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
        public Task<List<UserVm>> SignupInDayAsync()
        {
            var s = _users.Where(c => c.Regdate.Date == DateTime.Now.Date)
            .Select(x => new UserVm
            {
                FullName = x.FullName,
                UserName = x.Username,
                IsActive = x.IsActive,
                Ban = x.Ban,
                Address = x.Address.State + " " + x.Address.City,
                LastLogin = x.LastLoggedIn.ToShortDateTimeString()
            }).ToListAsync();
            return s;
        }
        public Task<long> signupInDayCountAsync
        {
            get
            {
                var s = _users.Where(c => c.Regdate.Date == DateTime.Now.Date)
                .Select(x => new UserVm
                {
                    FullName = x.FullName,
                    UserName = x.Username,
                    IsActive = x.IsActive,
                    Ban = x.Ban,
                    Address = x.Address.State + " " + x.Address.City,
                    LastLogin = x.LastLoggedIn.ToShortDateTimeString()
                }).LongCountAsync();
                return s;
            }
        }

        public Task<List<UserVm>> SignupInMounthAsync()
        {
            var s = _users.Where(c => 
            c.Regdate.Year == DateTime.Now.Year && 
            c.Regdate.Month == DateTime.Now.Month)
            .Select(x => new UserVm
            {
                Id = x.Id,
                role = x.UserRoles.Select(f => f.Role).ToList(),
                FullName = x.FullName,
                UserName = x.Username,
                IsActive = x.IsActive,
                Ban = x.Ban,
                Address = x.Address.State + " " + x.Address.City,
                LastLogin = x.LastLoggedIn.ToString()
            }).ToListAsync();
            return s;
        }

        public Task<long> signUpInMounthCountAsync
        {
            get
            {
                var s = _users.Where(c => c.Regdate.Year == DateTime.Now.Year && c.Regdate.Month == DateTime.Now.Month)
                .Select(x => new UserVm
                {
                    FullName = x.FullName,
                    UserName = x.Username,
                    IsActive = x.IsActive,
                    Ban = x.Ban,
                    Address = x.Address.State + " " + x.Address.City,
                    LastLogin = x.LastLoggedIn.ToShortDateTimeString()
                }).LongCountAsync();
                return s;
            }
        }

        public async Task<bool> UnBanAsync(long id)
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

        public Task ChangeRole(UserRoleVm userRole)
        {
            var user = _users.Select(x => x.UserRoles.Where(i => i.UserId == userRole.UserId));

            var ur = _uow.Set<UserRole>();
            foreach (var f in user)
            {
                ur.RemoveRange(f);
            }
            _uow.SaveAllChangesAsync();

            foreach (var i in userRole.Roles)
            {
                ur.Add(new UserRole
                {
                    RoleId = i.Id,
                    UserId = userRole.UserId
                });
            }
            return _uow.SaveAllChangesAsync();
        }
    }
}

public class UserVm
{
    public long Id { get; set; }
    public string UserName { set; get; }
    public string FullName { set; get; }
    public string LastLogin { set; get; }
    public bool IsActive { set; get; }
    public bool Ban { set; get; }
    public string Address { set; get; }
    public List<Role> role { get; set; }
    public string Image { get; set; }
}
 