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
        private IRoleAdminService _role;
        private IUsersAdminService _userAdmin;
        private IJavbAdminService _javabAdmin;
        private ISoalAdminService _soalAdmin;
        private readonly ITagAdminServices _tagAdmin;

        public statisticsService(
            IUsersAdminService userAdmin,
            ISoalAdminService soalAdmin,
            IJavbAdminService javabAdmin,
            ITagAdminServices tagAdmin,
            IUnitOfWork uow,
            ISecurityService securityService,
            IRoleAdminService roleAdminService
            )
        {
            _role = roleAdminService;
            _userAdmin = userAdmin;
            _userAdmin.CheckArgumentIsNull(nameof(_userAdmin));
            _soalAdmin = soalAdmin;
            _soalAdmin.CheckArgumentIsNull(nameof(_soalAdmin));
            _javabAdmin = javabAdmin;
            _javabAdmin.CheckArgumentIsNull(nameof(_javabAdmin));
            _tagAdmin= tagAdmin;
            _tagAdmin.CheckArgumentIsNull(nameof(_tagAdmin));
            _uow = uow;
            _uow.CheckArgumentIsNull(nameof(_uow));
        }

        public async Task<statistic> get()
        {
            var st = new statistic();
            st.userCount =await _userAdmin.getCountAsync;
            st.userCountDay = await _userAdmin.signupInDayCountAsync;
            st.soalCount = await _soalAdmin.getCountAsync;
            st.soalCountDay = await _soalAdmin.getInDayCountAsync;
            st.javabCount = await _javabAdmin.getCountAsync;
            st.javabCountDay = await _javabAdmin.getTodayCountAsync;
            st.tagCount = await _tagAdmin.getCountAsync;
            st.roleCount = await _role.getCountAsync;
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
    public class statistic
    {
        public long roleCount {get;set;}
        public long userCount { get; set; }
        public long userCountDay { get; set; }
        public long soalCount { get; set; }
        public long soalCountDay { get; set; }

        public long javabCount { get; set; }
        public long javabCountDay { get; set; }

        public long tagCount { get; set; }
    }
    public class searchVm {
        public string userName { get; set; }
        public long userId { get; set; }

        public SoalVM soal { get; set; }
        public List<JavabVM> javab { get; set; }
        public List<JsonVm> tags { get; set; }
    }
    
}