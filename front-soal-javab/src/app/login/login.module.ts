import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { SharedModule } from '@app/shared/shared.module';
import { SignUpComponent } from './sign-up/sign-up.component';
<<<<<<< HEAD
import { ActivateUserComponent } from './activate-user/activate-user.component';
=======
import { LanguageComponent } from '@app/layout/language/language/language.component';
import { LayoutModule } from '@app/layout/layout.module';
>>>>>>> 6b0c5775a59ae18e3958d71fa8f3e4260ab0a471

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
<<<<<<< HEAD
    ActivateUserComponent
=======

>>>>>>> 6b0c5775a59ae18e3958d71fa8f3e4260ab0a471
  ],
  imports: [
    SharedModule,
    RouterModule,
    LayoutModule,

    // RouterModule.forChild(routes)
  ],
  exports:[LanguageComponent]

})
export class LoginModule { }
