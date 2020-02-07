using System;
using System.Collections.Generic;


namespace SoalJavab.DomainClasses
{ 
    public class TagSoal
    {
        public long Id { get; set; }
        public long TagId { get; set; }
        public bool Isdeleted { get; set; }
        public virtual Soal Soal { set; get; }
        public virtual Tag Tag { set; get; }
    }

     public class TagUser
    {
        public long Id { get; set; }
        public long TagId { get; set; }
        public bool Isdeleted { get; set; }
        public virtual ApplicationUser user { set; get; }
        public virtual Tag Tag { set; get; }
    }
}
