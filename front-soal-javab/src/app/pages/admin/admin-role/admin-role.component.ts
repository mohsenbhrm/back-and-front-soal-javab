import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/core/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-role',
  templateUrl: './admin-role.component.html',
  styleUrls: ['./admin-role.component.scss']
})
export class AdminRoleComponent implements OnInit {
  public role;
  addRoleForm: FormGroup;
  addRoleButtonDisabled = false;

  constructor(private adminServices: AdminService,
              private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.adminServices.getRoles().subscribe(res => this.role = res);
    this.initForm();

  }
  addRole() {
    this.addRoleButtonDisabled = true;
    if (this.addRoleForm.invalid) {
      this.addRoleButtonDisabled = false;
      return;
    } else {
      const header = new HttpHeaders();
      const body = {
        username: this.addRoleForm.controls.roleName.value,
        password: this.addRoleForm.controls.passWord.value
      };
      header.set('Content-Type', 'application/json');

      // localStorage.setItem('authAccount', JSON.stringify('token'));
      // this.router.navigate(['/home']);

      this.authService.login(body.username, body.password).subscribe(token => {
        this.addRoleButtonDisabled = false;
        if (token) {
          this.toastr.success('Login Successfull', 'Success');
          this.router.navigate(['/home']);
        } else {
          this.toastr.error('Login Failed', 'Error');
        }
      },
        err => {
          this.addRoleButtonDisabled = false;
          this.toastr.error('Login Failed', 'Error');
        });
    }

  }

  initForm() {
    this.addRoleForm = this.fb.group({
      roleName: ['', [Validators.required]]});
  }

}