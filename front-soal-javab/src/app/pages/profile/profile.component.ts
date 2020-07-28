import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from './profile.service';
import { ToastrService } from 'ngx-toastr';
import { HeaderService } from '@app/layout/header/header.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { QuestionService } from '../question/question.service';
import { TagModel } from '../question/question.component';
import { Text } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  changePasswordForm: FormGroup;
  selectTagsForm: FormGroup;

  // fields: any[];
  // activeSubFields: any[];

  // subfieldArray: any[] = [];

  userTags = [];

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private toastrService: ToastrService,
    private headerService: HeaderService,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.initChangePassForm();
    this.getUserTags();
    this.initSelectTagsFrom();

  }

  initChangePassForm() {
    this.changePasswordForm = this.fb.group({
      currentPassword: [null, [Validators.required]],
      newPassword: [null, [Validators.required, Validators.minLength(6)]],
      repeatPassword: [null, [Validators.required]]
    },
      {
        validator: this.MustMatch('newPassword', 'repeatPassword')
      });
  }

  initSelectTagsFrom() {
    this.selectTagsForm = this.fb.group({
      tags: [this.userTags, Validators.required]
    });
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  changePassword() {
    if (this.changePasswordForm.invalid) {
      return;
    }
    const tmp = this.changePasswordForm.getRawValue();
    const body = {
      CurrentPassword: tmp.currentPassword,
      NewPassword: tmp.newPassword
    };
    // console.log(body);

    this.profileService.changePassword(body).subscribe(
      res => {
        this.toastrService.success('change pass', 'success');
      },
      err => {
        this.toastrService.error('change pass', 'error');
      }
    );
  }


  getUserTags() {
    this.headerService.userInfo.subscribe(userInfo => {
      userInfo.tags.forEach(el => this.userTags.push({ display: el.onvan, value: el.id }));

    });
  }

  requestAutocompleteItems = (text: string): Observable<any> => {

    const url = `${environment.apiConfig.baseUrl}/api/Tags/${text}`;
    return this.questionService.tryTagSearch(text);
  }

  checkIfAvalable($event) {
    if (typeof ($event.value) === 'string') {
      return this.questionService.tryTagSearch($event.display).subscribe((res: TagModel[]) => {
        const result = res.find(el => el.display === $event.display);
        if (result) {
          const tagRes = this.selectTagsForm.controls.tags.value.find(el => el.display === $event.display);
          tagRes.value = result.value;
        }
      });
    }
  }



  saveTags() {
    if (this.selectTagsForm.invalid) {
      this.selectTagsForm.markAllAsTouched();
      return;
    }
    const editedFormData = this.selectTagsForm.getRawValue();
    const mappedTags = [];
    editedFormData.tags.forEach(element => {
      mappedTags.push({
        Id: (typeof element.value === 'string') ? 0 : element.value,
        name: element.display
      });
    });

    this.profileService.setTags(mappedTags).subscribe(res => {
      this.toastrService.success('ثبت شد', 'res', { timeOut: 2000 });
    },
    err => {
      this.toastrService.error('خطا', 'res', { timeOut: 2000 });
    });
  }


}
