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
    public interface ITagAdminServices
    {
        Task<bool> DeleteAsync(long id);
        Task DeleteSamesAsync();
        Task<List<TagVM>> GetAllAsync();
        Task<List<TagVM>> GetAllDeletedsAsync();
        Task updateAsync(JsonVm item);
    }

    public class TagAdminServices : ITagAdminServices
    {
        private readonly IUnitOfWork _uow;
        private readonly DbSet<Tag> _Tags;
        private readonly ISecurityService _securityService;

        public TagAdminServices(
            IUnitOfWork uow,
            ISecurityService securityService
            )
        {
            _uow = uow;
            _uow.CheckArgumentIsNull(nameof(_uow));

            _Tags = _uow.Set<Tag>();

            _securityService = securityService;
            _securityService.CheckArgumentIsNull(nameof(_securityService));
        }

        public Task<List<TagVM>> GetAllAsync()
        {
            var s = _Tags.Where(d => !d.IsDeleted).Include(c => c.TagSoal)
            .Include(us => us.TagUsers)
            .Select(x => new TagVM
            {
                Onvan = x.Onvan,
                Id = x.Id,
                UsedSoal = x.TagSoal.Where(i => !i.Isdeleted).LongCount(),
                UsedUser = x.TagUsers.Where(i => !i.Isdeleted).LongCount()
            }).ToListAsync();
            return s;
        }
        public Task<List<TagVM>> GetAllDeletedsAsync()
        {
            var s = _Tags.Where(d => d.IsDeleted).Include(c => c.TagSoal)
            .Include(us => us.TagUsers)
            .Select(x => new TagVM
            {
                Onvan = x.Onvan,
                Id = x.Id,
                UsedSoal = x.TagSoal.Where(i => !i.Isdeleted).LongCount(),
                UsedUser = x.TagUsers.Where(i => !i.Isdeleted).LongCount()
            }).ToListAsync();
            return s;
        }
        public Task DeleteSamesAsync()
        {
            var s = _Tags.Where(d => !d.IsDeleted).Include(ut => ut.TagUsers).Include(st => st.TagSoal);
            foreach (var item in s)
            {
                var a = s.Where(x => x.Onvan == item.Onvan && x.Id != item.Id);
                foreach (var i in a)
                {
                    var st = i.TagSoal;
                    foreach (var bs in st)
                    {
                        bs.TagId = item.Id;
                    }
                    var ut = i.TagUsers;
                    foreach (var bs in ut)
                    {
                        bs.TagId = item.Id;
                    }
                }
                a.ForEachAsync(v => v.IsDeleted = true);
            }
            return _uow.SaveAllChangesAsync();
        }
        public async Task<bool> DeleteAsync(long id)
        {
            try
            {
                var s = await _Tags.FindAsync(id);
                s.IsDeleted = true;
                _uow.MarkAsChanged(s);
                await _uow.SaveChangesAsync();
                return true;
            }
            catch { return false; }
        }
        public Task updateAsync(JsonVm item)
        {
            var tag = _Tags.Find(item.Id);
            if (tag != null)
            {
                tag.Onvan = item.name;
                return _uow.SaveChangesAsync();
            }
            return null;
        }
    }
}