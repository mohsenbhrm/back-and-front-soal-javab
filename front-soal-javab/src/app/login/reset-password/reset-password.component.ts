import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/core/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup;
  resetButtonDisabled = false;

  constructor(
    private translate: TranslateService,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }
  initForm() {
    this.resetForm = this.fb.group({
      userName: ['', [Validators.required]],
      mail: ['', [Validators.required]]
    });
  }
  ngOnInit() {
    this.initForm();
  }

  onReset() {
    this.resetButtonDisabled = true;
    if (this.resetForm.invalid) {
      this.resetButtonDisabled = false;
      return;
    } else {
      const header = new HttpHeaders();
      const body = {
        username: this.resetForm.controls.userName.value,
        mail: this.resetForm.controls.mail.value
      };
      header.set('Content-Type', 'application/json');

      // localStorage.setItem('authAccount', JSON.stringify('token'));
      // this.router.navigate(['/home']);

      this.authService.resetpass(body.username, body.mail).subscribe(Response => {
        this.resetButtonDisabled = false;
          this.toastr.success('رمز عبور جدید به ایمیل شما ارسال گردید' , 'resetPassword');
          this.router.navigate(['/login']);
      },
        err => {          console.log(JSON.stringify(err))

          this.resetButtonDisabled = false;
          this.toastr.error('عملسات ناموفق' ,'resetPassword');
        });
    }

  }



  // changeLang(language: string) {
  //   this.translate.use(language);
  // }

}
