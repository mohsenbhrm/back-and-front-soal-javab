import { Component, OnInit, Injectable } from '@angular/core';

@Injectable({providedIn: 'root'
})
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuExpanded = false;
  constructor() { }

  ngOnInit() {
  }

  menuToggle() {
    this.menuExpanded = !this.menuExpanded;
  }

}
