using System.Collections.Generic;
using System.Threading.Tasks;
using SoalJavab.DomainClasses;
using SoalJavab.Services.Models;

namespace SoalJavab.Services.Contracts
{
    public interface ITagServices
    {
        Task<bool> AddTagUserAsync(IList<userTagVm> usertag);

        // Task<bool> AddTagUserAsync(userTagVm  userTag);
        TagVM CreatTag(TagVM tag);
        Task<TagVM> CreatTagAsync(TagVM tag);
        IList<TagVM> GetByUser(long id);
        // Task<IList<TagVM>> GetByUserAsync(ApplicationUser user);
        Task<List<TagVM>> GetByUserAsync(ApplicationUser user);
        IList<JsonVm> GetOtherTagsforSoal(long Idsoal);
        IList<TagVM> getTags();
        IList<TagVM> GetTags(string TagName);
        Task<IList<JsonVm>> GetTAGsAsync(long IdZirreshte);
        Task<List<JsonVm>> GetTAGsAsync();
        Task<List<JsonVm>> GetTagsByzirreshteAsync(long Idzirreshteh);
        IList<JsonVm> GetTagsofSoal(long Idsoal);
        bool ValidateTag(long id);
        bool ValidateTag(long[] id);
    }
}