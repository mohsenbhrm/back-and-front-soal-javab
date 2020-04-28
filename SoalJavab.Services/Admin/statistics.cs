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
        Task<long> soalsCount();
        Task<long> javabsCount();
        Task<long> usersCount();
        Task<long> tagsCount();
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
        public Task<long> javabsCount()
        {
            var q = _uow.Set<Javab>().LongCountAsync();
            return q;
        }
        public Task<long> soalsCount()
        {
            var q = _uow.Set<Soal>().LongCountAsync();
            return q;
        }
        public Task<long> tagsCount()
        {
            var q = _uow.Set<Tag>().LongCountAsync();
            return q;
        }
        public Task<long> usersCount()
        {
            var q = _uow.Set<ApplicationUser>().LongCountAsync();
            return q;
        }
    }
}