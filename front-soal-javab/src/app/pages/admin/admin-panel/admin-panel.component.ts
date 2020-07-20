import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  statistics = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 1, 3, 4, 5, 6, 7, 1, 0];
  constructor() { }

  ngOnInit() {
  }

}
