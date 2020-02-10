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
        Task<bool> Delete(long id);
        Task<List<TagVM>> GetAll();
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

        public Task<List<TagVM>> GetAll()
        {
            var s = _Tags.Include(c => c.TagSoal)
            .Include(us=>us.TagUsers)
            .Select(x => new TagVM
            {
                Onvan = x.Onvan,
                Id = x.Id,
                UsedSoal = x.TagSoal.Where(i=>!i.Isdeleted).LongCount(),
                UsedUser = x.TagUsers.Where(i=>!i.Isdeleted).LongCount()
            }).ToListAsync();
            return s;
        }
        public async Task<bool> Delete(long id)
        {
            try {
            var s = await _Tags.FindAsync(id);
            s.IsDeleted = true;
            _uow.MarkAsChanged(s);
            await _uow.SaveChangesAsync();
            return true;
            }
            catch {return false;}
        }
    }
}