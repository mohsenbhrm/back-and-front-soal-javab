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
        Task<long> getCountAsync { get; }

        Task<bool> DeleteAsync(long id);
        Task DeleteSamesAsync();
        Task<List<TagVM>> GetAllAsync(int pageId);
        Task<List<TagVM>> GetAllDeletedsAsync(int pageId);
        Task updateAsync(JsonVm item);
        Task<bool> _DeleteOrUndoRangeAsync(long id, bool deleteAction);
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
        public Task<long> getCountAsync => _Tags.LongCountAsync();

        public Task<List<TagVM>> GetAllAsync(int pageId = 0)
        {
            var q = new List<TagVM>();
            var s = _Tags.Where(d => !d.IsDeleted).OrderByDescending(i => i.Id)
            .Include(c => c.TagSoal)
            .Include(us => us.TagUsers)
            .Skip(myParams.pageSize * pageId).Take(myParams.pageSize)
            .Select(x => new TagVM
            {
                Onvan = x.Onvan,
                Id = x.Id,
                UsedSoal = x.TagSoal.Where(i => !i.Isdeleted).LongCount(),
                UsedUser = x.TagUsers.Where(i => !i.Isdeleted).LongCount()
            }).ToListAsync();
            return s;
        }
        public Task<List<TagVM>> GetAllDeletedsAsync(int pageId = 0)
        {
            var s = _Tags.Where(d => d.IsDeleted).OrderByDescending(i => i.Id)
            .Include(c => c.TagSoal)
            .Include(us => us.TagUsers)
            .Skip(myParams.pageSize * pageId).Take(myParams.pageSize)
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
                var s = await _DeleteOrUndoAsync(id, true);
                if (s)
                {
                    await _uow.SaveChangesAsync();
                    return true;
                }
                return false;
            }
            catch { return false; }
        }
        private async Task<bool> _DeleteOrUndoAsync(long id, bool deleteAction)
        {
            try
            {
                var s = await _Tags.FindAsync(id);
                s.IsDeleted = deleteAction;
                _uow.MarkAsChanged(s);
                return true;
            }
            catch { return false; }
        }
        public async Task<bool> _DeleteOrUndoRangeAsync(long id, bool deleteAction)
        {
            try
            {
                var x = await _DeleteOrUndoAsync(id, deleteAction);
                
                if (x)
                {
                await _uow.SaveAllChangesAsync();
                return x;
                }
                return x;
            }

            catch { throw new Exception(); }
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