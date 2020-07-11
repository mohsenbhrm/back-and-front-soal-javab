import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/auth/auth.service';
import { HeaderService } from '@app/layout/header/header.service';
import { TranslateService } from '@ngx-translate/core';
import { MenuComponent } from '@app/layout/menu/menu.component';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  userInfo;
  constructor(private headerService: HeaderService,
    private authService: AuthService ,
    private translate: TranslateService,
    private _menu : MenuComponent
    ) { }

  ngOnInit() {
    this.headerService.getUserInfo().subscribe(userInfo => {
      this.userInfo = userInfo;
    });
  }

  onLoggedout() {
    this.authService.logout();
    this._menu.menuToggle();
  }

  changeLang(language: string) {
    this.translate.use(language);
    this._menu.menuToggle();
  }
  toggleMenu()
  {this._menu.menuToggle();}
}
