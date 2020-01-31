import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from './profile.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  changePasswordForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.initChangePassForm();
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
    console.log(body);

    this.profileService.changePassword(body).subscribe(
      res => {
        this.toastrService.success('change pass', 'success');
      },
      err => {
        this.toastrService.error('change pass', 'error');
      }
    );
  }

}
