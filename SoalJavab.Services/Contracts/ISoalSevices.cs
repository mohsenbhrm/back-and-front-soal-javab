using System.Collections.Generic;
using SoalJavab.DomainClasses;
using SoalJavab.Services.Models;

namespace SoalJavab.Services.Contracts
{
    public interface ISoalServices
    {
        bool DeleteSoal(long Idsoal);
        bool EditforSoal(SoalEditVM soalVM);
        IEnumerable<Soal> GetAllByTag(long[] Tagid);
        IEnumerable<Soal> GetAllByzirreshteh(long ZirReshtehID);
        Soal GetById(long id);
       // Soal GetById(long id);
        SoalOfUserVM getSoalbyId(long IdSoal);
        IList<SoalOfUserVM> getSoalbyIdUser(long IdUser);

        IList<SoalOfUserVM> getSoalbyIdUserAnswered(long IdIdUser);
        IList<SoalOfUserVM> getSoalbyIdUserDeleted(long IdIdUser);
        SoalVM getSoalForEdit(long id);
        bool isSoalOfuser(long IdSoal, long IdUser);
        bool newEditforSoal(SoalVM soalVM);
        bool postforSoal(SoalVM soalVM, long UserId);
    }
}