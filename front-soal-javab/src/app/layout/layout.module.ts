import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LanguageComponent } from './language/language/language.component';
import { SearchformComponent } from './searchform/searchform.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    MenuComponent,
    LanguageComponent,
    SearchformComponent,
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [LanguageComponent]
})
export class LayoutModule { }
