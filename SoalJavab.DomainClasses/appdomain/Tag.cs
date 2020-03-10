using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoalJavab.DomainClasses
{
    public class Tag
    {
        public long Id { get; set; }
        public string Onvan { set; get; }
        public bool IsDeleted { set; get; }
        public virtual IList<TagSoal> TagSoal { set; get; }
        public virtual IList<TagUser> TagUsers { set; get; }



    }
}
