import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userInfo;

  constructor(
    public router: Router,
    private headerService: HeaderService,

  ) {
  }

  ngOnInit() {
    this.headerService.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
    });
  }
}
