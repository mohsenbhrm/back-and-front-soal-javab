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
        Task<bool> Delete(long id);
        Task<List<JavabVM>> GetAll();
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

            _securityService = securityService;
            _securityService.CheckArgumentIsNull(nameof(_securityService));
            _usersService = usersService;
            _usersService.CheckArgumentIsNull(nameof(_usersService));
            _contextAccessor = contextAccessor;
            _contextAccessor.CheckArgumentIsNull(nameof(_contextAccessor));
        }

        public Task<List<JavabVM>> GetAll()
        {
            var s = _Javabs.Include(c => c.User)
            .Include (d=>d.Soal)
            .Select(x => new JavabVM
            {
                Matn = x.Matn,
                Id = x.Id,
                IsDeleted = x.IsDeleted,
                date = x.RegDate,
                Username = x.User.Username,
                IdSoal = x.Soal.Id
            }).ToListAsync();
            return s;
        }
        public async Task<bool> Delete(long id)
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
    }
}