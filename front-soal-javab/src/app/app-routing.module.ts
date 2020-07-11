import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './pages/question/question.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyQuestionListComponent } from './pages/my-question-list/my-question-list.component';
import { MyAnswerListComponent } from './pages/my-answer-list/my-answer-list.component';
import { QuestionsFeedComponent } from './pages/questions-feed/questions-feed.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchComponent } from './pages/search/search.component';
import { AdminPanelComponent } from './pages/admin/admin-panel/admin-panel.component';
import { ActivateUserComponent } from './login/activate-user/activate-user.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'admin/',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: 'login',
    // loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    component: LoginComponent
  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full',

      },
      {
        path: 'admin',
    component: AdminPanelComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
      }
    ]
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'active-user',
    component: ActivateUserComponent,
  },
    {
      path: 'active-user/:active/:user',
      component: ActivateUserComponent,
    },
  {
    path: 'home',
    // component: LayoutComponent,
    canActivate: [AuthGuard],
    // loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'question',
        component: QuestionComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: 'search/:search',
        component: SearchComponent,
      },
      {
        path: 'my-questions',
        component: MyQuestionListComponent,
      },
      {
        path: 'my-answers',
        component: MyAnswerListComponent,
      },
      {
        path: 'question-feed',
        component: QuestionsFeedComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
