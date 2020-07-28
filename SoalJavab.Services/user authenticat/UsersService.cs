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

namespace SoalJavab.Services
{
    public interface IUsersService
    {
        Task<string> GetSerialNumberAsync(long userId);
        Task<ApplicationUser> FindUserAsync(string username, string password);
        Task<ApplicationUser> FindUserAsync(long userId);
        Task UpdateUserLastActivityDateAsync(long userId);
        Task<ApplicationUser> GetCurrentUserAsync();
        long GetCurrentUserId();
        Task<(bool Succeeded, string Error)> ChangePasswordAsync(ApplicationUser user, string currentPassword, string newPassword);
        Task<List<ApplicationUser>> GetAllUsers();
        Task<List<ApplicationUser>> GetActiveUsers();
        Task<List<ApplicationUser>> GetNotActiveUsers();
        bool addUserReshteh(long[] id);
        Task<ActivUserVm> AddNewUserAsync(SignUpVm signUp);
        Task<bool> isUserNameExcist(string username);
        Task<ApplicationUser> FindUserAsync(ActivUserVm active);
    }

    public class UsersService : IUsersService
    {
        private readonly IUnitOfWork _uow;
        private readonly DbSet<ApplicationUser> _users;
        private readonly ISecurityService _securityService;
        private readonly IHttpContextAccessor _contextAccessor;

        public UsersService(
            IUnitOfWork uow,
            ISecurityService securityService,
            IHttpContextAccessor contextAccessor
            )
        {
            _uow = uow;
            _uow.CheckArgumentIsNull(nameof(_uow));

            _users = _uow.Set<ApplicationUser>();

            _securityService = securityService;
            _securityService.CheckArgumentIsNull(nameof(_securityService));

            _contextAccessor = contextAccessor;
            _contextAccessor.CheckArgumentIsNull(nameof(_contextAccessor));
        }

        public Task<ApplicationUser> FindUserAsync(long userId)
        {
            return _users.FindAsync(userId);
        }

        public Task<ApplicationUser> FindUserAsync(string username, string password)
        {
            var passwordHash = _securityService.GetSha256Hash(password);

            return _users.FirstOrDefaultAsync(x => x.Username == username && x.Password == passwordHash);
            // var passwordHash = _securityService.GetSha256Hash(password);
            //return _users.FirstOrDefaultAsync(x => x.Username == username && x.Password == passwordHash);
        }
        public async Task<ApplicationUser> FindUserAsync(ActivUserVm active)
        {

            var q = await _users.FirstOrDefaultAsync(x => x.Username == active.username && x.SerialNumber == active.activeCode);
            if ( q!= null){
                if(q.IsActive) {
                 return null;
            }
            q.IsActive = true;
            await _uow.SaveChangesAsync();
            return q;
            }
            else return null;
            
        }

        public Task<bool> isUserNameExcist(string username) => _users.AnyAsync(x => x.Username == username);
       // public Task<bool> isEmailExcist(string username) => _users.AnyAsync(x => x.mail == username);

        public async Task<string> GetSerialNumberAsync(long userId)
        {
            var user = await FindUserAsync(userId);
            return user.SerialNumber;
        }

        public async Task UpdateUserLastActivityDateAsync(long userId)
        {
            var user = await FindUserAsync(userId);
            if (user.LastLoggedIn != null)
            {
                var updateLastActivityDate = TimeSpan.FromMinutes(2);
                var currentUtc = DateTimeOffset.UtcNow;
                var timeElapsed = currentUtc.Subtract(user.LastLoggedIn.Value);
                if (timeElapsed < updateLastActivityDate)
                {
                    return;
                }
            }
            //user.OldLoggedIn = user.LastLoggedIn;
            user.LastLoggedIn = DateTimeOffset.Now;// UtcNow;
            await _uow.SaveChangesAsync();
        }

        public long GetCurrentUserId()
        {
            var claimsIdentity = _contextAccessor.HttpContext.User.Identity as ClaimsIdentity;
            var userDataClaim = claimsIdentity?.FindFirst(ClaimTypes.UserData);
            var userId = userDataClaim?.Value;
            return string.IsNullOrWhiteSpace(userId) ? 0 : long.Parse(userId);
        }

        public Task<ApplicationUser> GetCurrentUserAsync()
        {
            var userId = GetCurrentUserId();
            return FindUserAsync(userId);
        }

        public async Task<(bool Succeeded, string Error)> ChangePasswordAsync(ApplicationUser user, string currentPassword, string newPassword)
        {
            var currentPasswordHash = _securityService.GetSha256Hash(currentPassword);
            if (user.Password != currentPasswordHash)
            {
                return (false, "Current password is wrong.");
            }

            user.Password = _securityService.GetSha256Hash(newPassword);
            user.SerialNumber = Guid.NewGuid().ToString("N"); // To force other logins to expire.
            await _uow.SaveChangesAsync();
            return (true, string.Empty);
        }


        public Task<List<ApplicationUser>> GetAllUsers()
        {
            return _users.ToListAsync();
        }
        public Task<List<ApplicationUser>> GetActiveUsers()
        {
            return _users.Where(x => x.IsActive).ToListAsync();
        }
        public Task<List<ApplicationUser>> GetNotActiveUsers()
        {
            return _users.Where(x => !x.IsActive).ToListAsync();
        }
        public bool addUserReshteh(long[] id)
        {
            var q = _uow.Set<ZirReshteh>().Where(x => id.Contains(x.Id) && !x.IsDeleted).ToList();
            var s = _users.Where(x => x.Id == GetCurrentUserId()).FirstOrDefault();
            var w = _uow.Set<ReshtehUser>();
            foreach (var n in q)
            {
                w.Add(new ReshtehUser
                {
                    ApplicationUserId = s.Id,
                    IsDeleted = false,
                    ZirReshtehId = n.Id
                });
            }
            _uow.AddThisRange(w);
            _uow.SaveAllChanges();
            return true;
        }
        public bool addUserTag(long[] id)
        {
            var q = _uow.Set<Tag>().Where(x => id.Contains(x.Id) && !x.IsDeleted).ToList();
            var s = _users.Where(x => x.Id == GetCurrentUserId()).FirstOrDefault();
            var w = _uow.Set<TagUser>();
            foreach (var n in q)
            {
                w.Add(new TagUser
                {
                    user = s,
                    Isdeleted = false,
                    TagId = n.Id
                });
            }
            _uow.AddThisRange(w);
            _uow.SaveAllChanges();
            return true;
        }

        public async Task<LoginVm> AddNewUserAsyncold(SignUpVm signUp)
        {
            var q = new ApplicationUser
            {
                Username = signUp.Username,
                Name = signUp.Name,
                Password = _securityService.GetSha256Hash(signUp.Password),
                IsActive = false,
                Regdate = DateTime.Now,
                LastLoggedIn = DateTimeOffset.Now,
                NewReg = true,
                SerialNumber = Guid.NewGuid().ToString("N"),
                DisplayName = signUp.Name
            };

            await _users.AddAsync(q);
            await _uow.SaveAllChangesAsync();
            return new LoginVm { username = signUp.Username, password = signUp.Password };
        }

         public async Task<ActivUserVm> AddNewUserAsync(SignUpVm signUp)
        {
            var q = new ApplicationUser
            {
                Username = signUp.Username,
                Name = signUp.Name,
                Password = _securityService.GetSha256Hash(signUp.Password),
                IsActive = false,
                Regdate = DateTime.Now,
                LastLoggedIn = DateTimeOffset.Now,
                NewReg = true,
                SerialNumber = Guid.NewGuid().ToString("N"),
                DisplayName = signUp.Name
            };

            await _users.AddAsync(q);
            await _uow.SaveAllChangesAsync();
            return new ActivUserVm { username = signUp.Username, activeCode = q.SerialNumber };
        }
    }
}