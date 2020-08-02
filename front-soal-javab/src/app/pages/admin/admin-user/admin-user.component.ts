import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {

  public users;
  public banedusers;

  constructor(private adminservices: AdminService,
    private toastr: ToastrService,
    private translate: TranslateService

  ) {
    translate.stream('Nothing_found').subscribe((text: string) => { this.msgnothingfound = text });
  }

  public pageId = 0;
  public deletedPageId = 0;
  public msgnothingfound;
  loadMore(id: any) {

    this.adminservices.getUsers(id).subscribe(res => {
      this.users = res
      this.pageId = id;
    }, err => {
      this.toastr.error(this.msgnothingfound, '!');
    });
  }
  loadMoredeleted(id: any) {

    this.adminservices.getdeletedUsers(id).subscribe(res => {
      this.banedusers = res
      this.deletedPageId = id;
    }, err => { this.toastr.error(this.msgnothingfound, '!'); });
  }

  ngOnInit() {
    this.adminservices.getUsers().subscribe(res => this.users = res);
    this.adminservices.getdeletedUsers().subscribe(res => this.banedusers = res);

  }
  userfiter(dl: any) {
    return this.users.filter(x => x.ban === dl);
  }
  banUser(id: any) {
    this.adminservices.banUser(id).subscribe(res => {
      this.users = this.users.filter(item => item.id !== id);
      // this.users = removeDepartment;
      // this.removeDepartment(id).subscribe(res1 => this.users = res1;);
      this.toastr.success(JSON.stringify(res), 'res');
    },
      err => {
        this.toastr.error(JSON.stringify(err), 'err');
      });
  }

  unBanUser(id: any) {
    this.adminservices.unBanUser(id).subscribe(res => {
      this.banedusers = this.banedusers.filter(item => item.id !== id);
      this.toastr.success(JSON.stringify(res), 'res');
    },
      err => {
        this.toastr.error(JSON.stringify(err), 'err');
      });
  }
  removeDepartment(name: any) {
    return this.users.filter(item => item.id !== name);
  }
}
