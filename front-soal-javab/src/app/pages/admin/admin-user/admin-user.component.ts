import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {

  public users;
  constructor(private adminservices:AdminService) { }

  ngOnInit() {
    this.adminservices.getUsers().subscribe(res=>this.users= res);
  }

}
