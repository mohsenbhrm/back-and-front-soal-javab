import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { SharedModule } from '@app/shared/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ActivateUserComponent } from './activate-user/activate-user.component';
import { LayoutModule } from '@app/layout/layout.module';
import {LanguageComponent} from '@app/layout/language/language/language.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: LoginComponent,
//     pathMatch: 'full'
//   },
//   {
//     path: 'login',
//     component: LoginComponent,
//     pathMatch: 'full'
//   }
// ];

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ActivateUserComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    LayoutModule,

    // RouterModule.forChild(routes)
  ],
  exports: [LanguageComponent]

})
export class LoginModule { }
