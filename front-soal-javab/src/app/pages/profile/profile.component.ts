import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from './profile.service';
import { ToastrService } from 'ngx-toastr';
import { HeaderService } from '@app/layout/header/header.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  changePasswordForm: FormGroup;
  selectFieldForm: FormGroup;

  fields: any[];
  activeSubFields: any[];

  subfieldArray: any[] = [];

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private toastrService: ToastrService,
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.initChangePassForm();
    this.initSelectFieldFrom();
    this.getEssentials();
    this.getUserFields();

    this.selectFieldForm.controls.field.valueChanges.subscribe(changes => {
      const x = this.fields.find(el => el.id === changes);
      if (x) {
        this.activeSubFields = x.zirreshteh;
      }
    });
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

  initSelectFieldFrom() {
    this.selectFieldForm = this.fb.group({
      field: [null, Validators.required],
      subField: [null, Validators.required]
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

  getEssentials() {
    this.profileService.getEssentialForQuestion().subscribe(fields => {
      this.fields = fields;
    });
  }

  getUserFields() {
    this.headerService.userInfo.subscribe(userFields => {
      this.subfieldArray = userFields.zirReshteh;
    });
  }

  deleteSubFields(item) {
    this.subfieldArray = this.subfieldArray.filter(el => el.id !== item.id);
  }

  addSubField() {
    if (this.selectFieldForm.invalid) {
      this.selectFieldForm.markAllAsTouched();
      return;
    }

    const tmpfields = this.fields.find(el => el.id === this.selectFieldForm.controls.field.value);
    if (tmpfields) {
      const subtmp: any[] = tmpfields.zirreshteh;
      const tmpSubFields = subtmp.find(el => el.id === this.selectFieldForm.controls.subField.value);
      if (tmpSubFields) {
        const findDup = this.subfieldArray.find(el => el.id === tmpSubFields.id);
        if (!findDup) {
          this.subfieldArray.push({
            id: tmpSubFields.id,
            onvan: tmpSubFields.onvan,
            reshteh: tmpfields.onvan
          });
          this.selectFieldForm.reset();

        } else {
          this.toastrService.warning('زیر رشته تکراری است', 'زیررشته');
        }
      }
    }
  }

  saveFields() {
    const subFieldsArrayID = [];
    this.subfieldArray.forEach(element => {
      subFieldsArrayID.push(element.id);
    });

    this.profileService.setSubfields({ Name: 'UpdateTags', Id: subFieldsArrayID }).subscribe(res => {
      this.headerService.getUserInfo().subscribe(userFields => {
        this.subfieldArray = userFields.zirReshteh;
      });
    });
  }


}
