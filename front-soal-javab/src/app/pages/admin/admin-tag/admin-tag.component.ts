import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-tag',
  templateUrl: './admin-tag.component.html',
  styleUrls: ['./admin-tag.component.scss']
})
export class AdminTagComponent implements OnInit {

  public tags;
  constructor(private adminservice: AdminService) { }

  ngOnInit() {
    this.adminservice.getTags().subscribe(
      res=> this.tags = res);
  }

}
