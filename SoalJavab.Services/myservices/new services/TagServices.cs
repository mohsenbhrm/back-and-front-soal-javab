using Microsoft.EntityFrameworkCore;
using SoalJavab.DataLayer;
using SoalJavab.DomainClasses;
using SoalJavab.Services.Contracts;
using SoalJavab.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoalJavab.Services.myservices
{
    public class TagServices : ITagServices
    {
        private IUnitOfWork db;
        private ISoalRepository _soalRepository;
        private ITagRepository _tagRepository;
        private readonly DbSet<Tag> _tags;
        private readonly IUsersService _user;

        public TagServices(IUnitOfWork unitOfWork, ITagRepository tag,
            ISoalRepository soalrepo,
            ITagRepository tagRepository, IUsersService usersService)
        {
            db = unitOfWork;
            _soalRepository = soalrepo;
            _tagRepository = tagRepository;
            _tags = db.Set<Tag>();
            _user = usersService;

        }
        public IList<TagVM> getTags()
        {
            return _tags.Where(e => !e.IsDeleted).Select(x =>
            new TagVM
            {
                Id = x.Id,
                Onvan = x.Onvan,
            }).ToList(); ;
        }
        public async Task<List<JsonVm>> GetTAGsAsync() =>
        await _tags.Where(e => !e.IsDeleted).Select(x =>
        new JsonVm
        {
            Id = x.Id,
            name = x.Onvan,
        }).ToListAsync();

        public IList<TagVM> GetTagsByzirreshte(long Idzirreshteh)
        {
            try
            {
                var q = _tags.Where(e => !e.IsDeleted);
                return q.Select(x =>

               new TagVM
               {
                   Id = x.Id,
                   Onvan = x.Onvan,
               }).ToList();
            }
            catch
            {
                throw new Exception();
            }

        }
        public Task<List<JsonVm>> GetTagsByzirreshteAsync(long Idzirreshteh) =>
        _tags.Where(e => !e.IsDeleted)
           .Select(x =>
           new JsonVm
           {
               Id = x.Id,
               name = x.Onvan,
           }).ToListAsync();
        public void DeleteTag(long IdTag)
        {
            var q = _tagRepository.Delete(IdTag);
        }

        public TagVM CreatTag(TagVM tag)
        {
            try
            {
                if (tag == null)
                {
                    throw new NullReferenceException();
                }
                Tag tg = new Tag();
                tg.Onvan = tag.Onvan;
                db.Addnew<Tag>(tg);
                db.SaveAllChanges();
                tag.Id = tg.Id;
                return tag;
            }
            catch { return null; }
        }
        public async Task<TagVM> CreatTagAsync(TagVM tag)
        {

            try
            {
                if (tag == null)
                {
                    throw new NullReferenceException();
                }

                Tag tg = new Tag();
                tg.Onvan = tag.Onvan;
                db.Addnew<Tag>(tg);
                await db.SaveAllChangesAsync();
                tag.Id = tg.Id;

                if (tg != null)
                    return new TagVM { Id = tg.Id, Onvan = tg.Onvan };
                throw new Exception();
            }
            catch { return null; }
        }

        public IList<TagVM> GetTags(string TagName)
        {
            try
            {
                var q = _tags
                .Include(ts => ts.TagSoal)
                .Include(tu => tu.TagUsers)

                .Where(x => x.Onvan.Contains(TagName))
                    .Select(e => new TagVM
                    {
                        Id = e.Id,
                        Onvan = e.Onvan,
                        UsedSoal = e.TagSoal.LongCount(),
                        UsedUser = e.TagUsers.LongCount()
                    }
                     ).ToList();
                return q;
            }
            catch
            {
                throw new Exception();
            }
        }
        public async Task<IList<JsonVm>> GetTAGsAsync(long IdZirreshte)
        {
            var q = await GetTagsByzirreshteAsync(IdZirreshte);
            return q;
        }
        public IList<JsonVm> GetTagsofSoal(long Idsoal)
        {
            var q = db.Set<TagSoal>().Where(e => !e.Isdeleted && e.Soal.Id.Equals(Idsoal))
                .Select(e => new JsonVm { Id = e.Tag.Id, name = e.Tag.Onvan }).ToList();
            return q;
        }
        // بازیابی دیگر تگهای مربوط به زیررشته برای ویرایش سوال
        public IList<JsonVm> GetOtherTagsforSoal(long Idsoal)
        {
            var q = db.Set<TagSoal>().Where(e => !e.Isdeleted && e.Soal.Id.Equals(Idsoal)).Select(e => e.Tag);

            var s = db.Set<Tag>()
                .Where(e => !e.IsDeleted).Except(q)
                .Select(e => new JsonVm { Id = e.Id, name = e.Onvan }).ToList();
            return s;
        }
        private (List<TagVM> newtags, List<TagVM> oldtags) _InsertTags(IList<userTagVm> tagVm)
        {
            var q = new List<TagVM>();

            var e = new List<TagVM>();

            foreach (var n in tagVm.Where(x => x.Id == 0))
            {
                q.Add(new TagVM
                {
                    Onvan = n.Name,
                    Id = n.Id,
                }
                );
            }
            q = _tagRepository.CreatRange(q).ToList();

            foreach (var n in tagVm.Where(x => x.Id != 0))
            {
                e.Add(new TagVM
                {
                    Onvan = n.Name,
                    Id = n.Id,
                }
                );
            }

            //var s = q.Union(e);
            return (q.ToList(), e.ToList());
        }
        public async Task<bool> AddTagUserAsync(IList<userTagVm> usertag)
        {
            var user = await _user.GetCurrentUserAsync();
            var ur = db.Set<TagUser>();

            var s = ur.Where(d => d.user == user);
            if (s != null) ur.RemoveRange(s);
            var (newt,oldt) = _InsertTags(usertag);
            var alltags = newt.Union(oldt);
            List<TagUser> tagUsers = new List<TagUser>();
            foreach (var n in alltags)
            {
                tagUsers.Add(new TagUser
                {
                    user = user,
                    Isdeleted = false,
                    TagId = n.Id
                });
            }
            await ur.AddRangeAsync(tagUsers);
            var x = await db.SaveAllChangesAsync();
            if (x > 0) return true;
            return false;
        }
        public async Task<bool> oldAddTagUserAsync(long[] id)
        {
            var user = await _user.GetCurrentUserAsync();
            var ur = db.Set<TagUser>();
            var s = ur.Where(d => d.user == user);
            if (s != null) ur.RemoveRange(s);

            List<TagUser> tagUsers = new List<TagUser>();
            foreach (var n in id)
            {
                tagUsers.Add(new TagUser
                {
                    user = user,
                    Isdeleted = false,
                    TagId = n
                });
            }
            await ur.AddRangeAsync(tagUsers);
            var x = await db.SaveAllChangesAsync();
            if (x > 0) return true;
            return false;
        }
        public bool ValidateTag(long[] id)
        {
            foreach (var n in id)
            {
                if (ValidateTag(n) == false)
                {
                    return false;
                }
            }
            return true;
        }
        public bool ValidateTag(long id)
        {
            var q = _tags.Find(id);
            if (q == null) return false;
            return true;
        }


        public Task<List<TagVM>> GetByUserAsync(ApplicationUser user)
        {

            var q1 = db.Set<TagUser>().Where(x => x.user == user && !x.Isdeleted)
            .Select(i => i.TagId).ToList();

            var q = _tags.Where(x => q1.Contains(x.Id) && !x.IsDeleted).Select(c=> new TagVM {
                Id= c.Id,
                Onvan = c.Onvan,
            }).ToListAsync();

            if (q == null)
            {
                return null;
            }
            return q;
        }
        public IList<TagVM> GetByUser(long id)
        {
            var user = db.Set<ApplicationUser>().Find(id);


            var q1 = db.Set<TagUser>().Where(x => x.user == user && !x.Isdeleted)
            .Select(i => i.TagId).ToList();

            var q = _tags.Where(x => q1.Contains(x.Id) && !x.IsDeleted)
            .ToList();

            if (q == null)
            {
                return null;
            }
            return q.Select(c => new TagVM
            {
                Id = c.Id,
                Onvan = c.Onvan
            }).ToList();
        }
    }
}
