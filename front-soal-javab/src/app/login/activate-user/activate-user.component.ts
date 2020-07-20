import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthService } from '@app/core/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.scss']
})
export class ActivateUserComponent implements OnInit {
  state = false;
  stateActive = false;
  stateMassage;
  statSuccess;
  stateFail;
  username;
  activeCode;


  constructor(
    private rout: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private translate: TranslateService

  ) {
    translate.stream('activate_massage').subscribe(x => this.stateMassage = x);
    translate.stream('activate_massage_succes').subscribe(x => this.statSuccess = x);
    translate.stream('activate_massage_fail').subscribe(x => this.stateFail = x);

  }

  ngOnInit() {
    this.rout.paramMap.subscribe((params: ParamMap) => {
      if (params.has('active')) {
        if (params.has('user')) {
          this.activeCode = params.getAll('active').toString();
          this.username = params.getAll('user').toString();
          console.log('active  => ' + this.activeCode);
          console.log('user  => ' + this.username);
          this.authService.activeUser(this.username, this.activeCode).subscribe(
            reponse => {
              this.state = true;
              this.stateActive = true;
              this.toastr.success(this.statSuccess, 'ثبت نام موفق');
              this.router.navigate(['/home']);
            }, err => {
              this.state = true;
              this.stateActive = false;
              console.log('ajab active =>  ERROR ');
              this.toastr.error(err.error.value, this.stateFail);
            });
        } else {
          this.state = true;
          console.log('ajab user  =>  Ridi   ');
        }
      } else {
        this.state = false;
        console.log('ajab active =>  Ridi   ');
      }

    });
  }

}
