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
    public interface IstatisticsService
    {
        
        Task<statistic> get();
        Task<List<searchVm>> search(string name);
    }

    public class statisticsService : IstatisticsService
    {
        private readonly IUnitOfWork _uow;
        public statisticsService(
            IUnitOfWork uow,
            ISecurityService securityService
            )
        {
            _uow = uow;
            _uow.CheckArgumentIsNull(nameof(_uow));
        }

        public async Task<statistic> get()
        {
            var st = new statistic();
            st.user = await _uow.Set<ApplicationUser>().LongCountAsync();
            st.soal = await _uow.Set<Soal>().LongCountAsync();
            st.javab = await _uow.Set<Javab>().LongCountAsync();
            st.tag = await _uow.Set<Tag>().LongCountAsync();
            return st;
        }


        public Task<List<searchVm>> search(string name)
        {
            var t  = _uow.Set<TagSoal>()
            .Where(v=>v.Tag.Onvan.Contains(name)).Select(g=>g.Soal).Distinct();
        
            var s = _uow.Set<Soal>()
            .Where(x => x.Matn.Contains(name) ||  t.Contains(x))
            .Include(u=> u.User)
            .Include(ts=>ts.TagSoal)
            .Include(j=> j.Javab).ThenInclude(uj=>uj.User)
            .Select(c => new searchVm
            {
                userName = c.User.Username,
                soal = new SoalVM { date = c.Regdat.TopersianShortDateTimeString(), Id = c.Id, Matn = c.Matn },
                javab = c.Javab
              .Select(x => new JavabVM
              {
                  Matn = x.Matn,
                  Username = x.User.Username,
                  IdUser = x.User.Id,
                  date = x.RegDate.TopersianShortDateTimeString()
              }).ToList(),
              tags = c.TagSoal.Where(v => !v.Isdeleted)
               .Select(ut => new JsonVm
               {
                   Id = ut.TagId,
                   name = ut.Tag.Onvan
               }).ToList(),
            })

            // .Include(y => y.Javab.Where(c => !c.IsDeleted))
            // .ThenInclude(u => u.User)
            .ToListAsync();
            return s;
        }

    }
    public class statistic {
        public long user{get; set;}
        public long soal{get; set;}
        public long javab{get; set;}
        public long tag{get; set;}
    }
    public class searchVm {
        public string userName { get; set; }
        public long userId { get; set; }

        public SoalVM soal { get; set; }
        public List<JavabVM> javab { get; set; }
        public List<JsonVm> tags { get; set; }
    }
    
}