import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/auth/auth.service';
import { HeaderService } from './header.service';
import { SearchService } from '@app/pages/search/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search: string;
  userInfo;

  constructor(
    private translate: TranslateService,
    public router: Router,
    private authService: AuthService,
    private headerService: HeaderService,
    private searchservice: SearchService

  ) {
  }

  ngOnInit() {
    this.headerService.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
    });
  }

  onLoggedout() {
    this.authService.logout();
  }

  changeLang(language: string) {
    this.translate.use(language);
  }
  onSearch() {
    console.log('header => ' + this.search)

    this.router.navigate(['/home/search',this.search]);
    this.searchservice.search2(this.search);
    // console.log(this.router.navigate(['./search',this.search]));
    // console.log("thththt" + this.search);

  }
}
