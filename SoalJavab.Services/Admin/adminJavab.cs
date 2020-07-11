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

namespace SoalJavab.Services.Admin
{
    public interface IJavbAdminService
    {
        Task<bool> DeleteAsync(long id);
        Task<List<JavabVM>> GetAllAsync();
        Task<bool> undoDeletedAsync(long id);
    }

    public class JavbAdminService : IJavbAdminService
    {
        private readonly IUnitOfWork _uow;
        private readonly DbSet<Javab> _Javabs;
        private readonly ISecurityService _securityService;
        private readonly IUsersService _usersService;
        private readonly IHttpContextAccessor _contextAccessor;

        public JavbAdminService(
            IUnitOfWork uow,
            ISecurityService securityService,
            IHttpContextAccessor contextAccessor,
            IUsersService usersService
            )
        {
            _uow = uow;
            _uow.CheckArgumentIsNull(nameof(_uow));
            _Javabs = _uow.Set<Javab>();
            _usersService = usersService;
            _usersService.CheckArgumentIsNull(nameof(_usersService));
        }

        public Task<List<JavabVM>> GetAllAsync()
        {
            var s = _Javabs
            .Include(c => c.User)
            .Include (d=>d.Soal)
            .Select(x => new JavabVM
            {
                Matn = x.Matn,
                Id = x.Id,
                IsDeleted = x.IsDeleted,
                date = x.RegDate.TopersianShortDateTimeString(),
                Username = x.User.Username,
                IdSoal = x.Soal.Id
            }).ToListAsync();
            return s;
        }
        public async Task<bool> DeleteAsync(long id)
        {
            try {
            var s = await _Javabs.FindAsync(id);
            s.IsDeleted = true;
            _uow.MarkAsChanged(s);
            await _uow.SaveChangesAsync();
            return true;
            }
            catch {return false;}
        }
        public async Task<bool> undoDeletedAsync(long id)
        {
            try {
            var s = await _Javabs.FindAsync(id);
            s.IsDeleted = false;
            _uow.MarkAsChanged(s);
            await _uow.SaveChangesAsync();
            return true;
            }
            catch {return false;}
        }
    }
}