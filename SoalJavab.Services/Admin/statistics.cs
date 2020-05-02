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
        Task<List<Soal>> search(string name);
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


        public Task<List<Soal>> search(string name)
        {
            var s = _uow.Set<Soal>().Where(x=>x.Matn.Contains(name)).ToListAsync();
            
            return s;
        }

    }
    public class statistic {
        public long user{get; set;}
        public long soal{get; set;}
        public long javab{get; set;}
        public long tag{get; set;}
    }
}