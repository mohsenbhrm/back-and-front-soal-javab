import { Component, OnInit } from '@angular/core';
import { SearchService } from '@app/pages/search/search.service';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.scss']
})
export class SearchformComponent implements OnInit {
  search: string;

  constructor(public router: Router,
    private searchservice: SearchService,
    private _menu: MenuComponent
    ) { }

  ngOnInit() {
  }
  onSearch() {
this._menu.menuToggle()
    this.router.navigate(['/home/search',this.search]);
    this.searchservice.search(this.search);
    // console.log(this.router.navigate(['./search',this.search]));
    // console.log("thththt" + this.search);

  }
}
