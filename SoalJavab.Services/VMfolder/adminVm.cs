using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SoalJavab.Services.Models.admin
{
    public class SoalVM
    {
        [HiddenInput]
        public long Id { get; set; }
        [Required(ErrorMessage = "متن سوال را وارد کنید")]
        public string Matn { get; set; }
        public IList<JsonVm> Tags { get; set; }
        public string date { set; get; }
        public bool IsDeleted{ get; set; }
        public string userName{get;set;}
    }
    public class JavabVM
    {
        public long Id { get; set; }
        [Required]
        public string Matn { get; set; }
        [Required]
        public long IdSoal { get; set; }
        public bool IsDeleted {get;set;}
        public string date {get;set;}
        public long IdUser { get; set; }
        public string Username { get; set; }
    }

    public class TagVM
    {
        public long Id { get; set; }
        public string Onvan { get; set; }
        public  long UsedSoal{get;set;}
        public  long UsedUser{get;set;}
    }
 
    public class JsonVm
    {
        public string name { get; set; }
        public long Id { get; set; }
    }
    public class UserRoleVm
{
    public long UserId { get; set; }
    public IList<RoleVm> Roles { get; set; }
}
public class RoleVm
{
    public long Id { get; set; }
    public string RoleName { get; set; }
}
}
