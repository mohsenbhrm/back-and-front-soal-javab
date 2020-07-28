import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  statistics ;
  constructor(private adminservices: AdminService) { }

  ngOnInit() {
    this.adminservices.getStatistics().subscribe(res => this.statistics = res)
  }

}
