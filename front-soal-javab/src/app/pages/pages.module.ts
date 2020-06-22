import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyQuestionListComponent } from './my-question-list/my-question-list.component';
import { MyAnswerListComponent } from './my-answer-list/my-answer-list.component';
import { QuestionsFeedComponent } from './questions-feed/questions-feed.component';
import { EditQuestionModalComponent } from './my-question-list/edit-question-modal/edit-question-modal.component';
import { EditAnswerModalComponent } from './my-answer-list/edit-answer-modal/edit-answer-modal.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminTagComponent } from './admin/admin-tag/admin-tag.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminSoalComponent } from './admin/admin-soal/admin-soal.component';
import { AdminJavabComponent } from './admin/admin-javab/admin-javab.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    QuestionComponent,
    DashboardComponent,
    MyQuestionListComponent,
    MyAnswerListComponent,
    QuestionsFeedComponent,
    EditQuestionModalComponent,
    EditAnswerModalComponent,
    ProfileComponent,
    SearchComponent,
    AdminPanelComponent,
    AdminTagComponent,
    AdminUserComponent,
    AdminSoalComponent,
    AdminJavabComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  entryComponents: [
    EditQuestionModalComponent,
    EditAnswerModalComponent
  ]
})
export class PagesModule { }
