import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {

  public users;
  public banedusers;

  constructor(private adminservices: AdminService,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.adminservices.getUsers().subscribe(res => this.users = res);
    this.adminservices.getdeletedUsers().subscribe(res => this.banedusers = res);

  }
  userfiter(dl: any) {
    return this.users.filter(x => x.ban === dl );
  }
  banUser(id: any) {
    this.adminservices.banUser(id).subscribe( res => {
      this.users = this.removeDepartment(id);
        // this.users = removeDepartment;
        // this.removeDepartment(id).subscribe(res1 => this.users = res1;);
      this.toastrService.success(JSON.stringify(res), 'res');
    },

        err => {
          this.toastrService.error(JSON.stringify(err), 'err');

        });
  }

  unBanUser(id: any) {
    this.adminservices.unBanUser(id).subscribe( res => {
      this.users = this.removeDepartment(id);
        // this.users = removeDepartment;
        // this.removeDepartment(id).subscribe(res1 => this.users = res1;);
      this.toastrService.success(JSON.stringify(res), 'res');
    },

        err => {
          this.toastrService.error(JSON.stringify(err), 'err');

        });
  }
removeDepartment(name: any) {
    return  this.users.filter(item => item.id !== name);
  }



}
