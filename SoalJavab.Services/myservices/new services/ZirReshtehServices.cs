using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using SoalJavab.DataLayer;
using SoalJavab.DomainClasses;
using SoalJavab.Services.Contracts;
using SoalJavab.Services.Models;
using System.Linq;
using System.Threading.Tasks;

namespace SoalJavab.Services.myservices
{

    public class ZirReshtehServices : IZirReshtehServices
    {
        private IUnitOfWork _db;
        private DbSet<ZirReshteh> _zirreshteh;
        private IUsersService _user;

        public ZirReshtehServices(IUnitOfWork unitOfWork, IUsersService usersService)
        {
            _db = unitOfWork;
            _zirreshteh = _db.Set<ZirReshteh>();
            _user = usersService;
        }
        public IList<ZirReshtehVm> GetByReshteh(long id)
        {
            var q = _zirreshteh.Where(x => x.Reshteh.Id == id && !x.IsDeleted).ToList();

            if (q == null)
            {
                return null;
            }
            return q.Select(c => new ZirReshtehVm
            {
                Id = c.Id,
                Onvan = c.Onvan,
                Reshteh = c.Reshteh.Onvan
            }).ToList();
        }
        public IList<ZirReshtehVm> GetByUser(long id)
        {
            var q1 = _db.Set<ReshtehUser>().Where(x => x.User.Id == id && !x.IsDeleted).Select(i => i.ZirReshtehId).ToList();

            var q = _zirreshteh.Where(x => q1.Contains(x.Id) && !x.IsDeleted).Include(rs => rs.Reshteh)
            .ToList();

            if (q == null)
            {
                return null;
            }
            return q.Select(c => new ZirReshtehVm
            {
                Id = c.Id,
                Onvan = c.Onvan,
                Reshteh = c.Reshteh.Onvan
            }).ToList();
        }

        public bool ValidateZirreshteh(long[] id)
        {
            foreach (var n in id)
            {
                if (ValidateZirreshteh(n) == false)
                {
                    return false;
                }
            }
            return true;
        }
        public bool ValidateZirreshteh(long id)
        {
            var q = _zirreshteh.Find(id);
            if (q == null) return false;
            return true;
        }

        public async Task<bool> AddZirreshtehUserAsync(long[] id)
        {
            var user = _user.GetCurrentUserId();
            var ur = _db.Set<ReshtehUser>();
            var s = ur.Where(d => d.ApplicationUserId == user);
            ur.RemoveRange(s);
            // if(s.Any())
            // {
            //     foreach(var f in s)
            //     {
            //         f.IsDeleted =true;
            //     }
            // }
            List<ReshtehUser> newReshtehUsers = new List<ReshtehUser>();
            foreach (var n in id)
            {
                newReshtehUsers.Add(new ReshtehUser
                {
                    ApplicationUserId = user,
                    IsDeleted = false,
                    ZirReshtehId = n
                });
            }
            await ur.AddRangeAsync(newReshtehUsers);
            var x = await _db.SaveAllChangesAsync();
            if (x > 0) return true;
            return false;
        }
    }
}