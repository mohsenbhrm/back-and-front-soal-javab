import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-role',
  templateUrl: './admin-role.component.html',
  styleUrls: ['./admin-role.component.scss']
})
export class AdminRoleComponent implements OnInit {
  public role;

  constructor(private adminServices: AdminService) { }

  ngOnInit() {
    this.adminServices.getRoles().subscribe(res=> this.role=res)

  }

}
