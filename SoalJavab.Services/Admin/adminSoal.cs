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
    public interface ISoalAdminService
    {
        Task<long> getInDayCountAsync { get; }
        Task<long> getCountAsync { get; }

        Task<bool> DeleteAsync(long id);
        Task<List<SoalVM>> GetAllAsync(bool isDeletedList,int pageId = 0);
        Task<bool> undoDeletedAsync(long id);
    }

    public class SoalAdminService : ISoalAdminService
    {
        private readonly IUnitOfWork _uow;
        private readonly DbSet<Soal> _soals;
        private readonly ISecurityService _securityService;
        private readonly IUsersService _usersService;
        private readonly IHttpContextAccessor _contextAccessor;

        public SoalAdminService(
            IUnitOfWork uow,
            ISecurityService securityService,
            IHttpContextAccessor contextAccessor,
            IUsersService usersService
            )
        {
            _uow = uow;
            _uow.CheckArgumentIsNull(nameof(_uow));

            _soals = _uow.Set<Soal>();

            _securityService = securityService;
            _securityService.CheckArgumentIsNull(nameof(_securityService));
            _usersService = usersService;
            _usersService.CheckArgumentIsNull(nameof(_usersService));
            _contextAccessor = contextAccessor;
            _contextAccessor.CheckArgumentIsNull(nameof(_contextAccessor));
        }

        public Task<long> getCountAsync => _soals.LongCountAsync();
        public Task<long> getInDayCountAsync => _soals.Where(c => c.Regdat == DateTime.Now.Date).LongCountAsync();
        public Task<List<SoalVM>> GetAllAsync(bool isDeletedList, int pageId = 0)
        {
            var s = _soals.Where(d => d.IsDeleted == isDeletedList).OrderByDescending(i=>i.Id)
            .Include(c => c.User)
            .Include(jvb => jvb.Javab)
            .Include(tg => tg.TagSoal).ThenInclude(tag => tag.Tag)
            .Skip(pageId*myParams.pageSize).Take(myParams.pageSize)
            .Select(x => new SoalVM
            {
                Matn = x.Matn,
                Id = x.Id,
                Tags = x.TagSoal.Where(v => !v.Isdeleted)
                .Select(tags => tags.Tag)
                .Select(a => new JsonVm { Id = a.Id, name = a.Onvan }).ToList(),
                IsDeleted = x.IsDeleted,
                date = x.Regdat.TopersianShortDateTimeString(),
                userName = x.User.Username
            }).ToListAsync();
            return s;
        }
        public async Task<bool> DeleteAsync(long id)
        {
            try
            {
                var s = await _soals.FindAsync(id);
                s.IsDeleted = true;
                _uow.MarkAsChanged(s);
                await _uow.SaveChangesAsync();
                return true;
            }
            catch { return false; }
        }
        public async Task<bool> undoDeletedAsync(long id)
        {
            try
            {
                var s = await _soals.FindAsync(id);
                s.IsDeleted = false;
                _uow.MarkAsChanged(s);
                await _uow.SaveChangesAsync();
                return true;
            }
            catch { return false; }
        }
    }
}