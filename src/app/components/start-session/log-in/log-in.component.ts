import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersLogIn } from 'src/app/models/userlogin.model';
import { SecurityService } from 'src/app/services/security.service';
// import { Router } from '@angular/router';
// import { MessageService } from 'primeng/api';
// import { DialogService } from 'primeng/dynamicdialog';
// import { SecurityService } from 'src/app/services/security.service';
// import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  remindMe: boolean = false;
  username: string = '';
  password: string = '';
  keepLogged: boolean = false;
  errorMessage: string = '';
  isLogin: boolean = false;
  usersLogIn!: UsersLogIn;

  constructor(
    private securityService: SecurityService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.errorMessage = '';
    console.log('[LoginComponent][onLogin]');
    this.errorMessage = '';
    this.isLogin = true;
    console.log(this.usersLogIn);
    this.securityService
      .login({
        email: this.usersLogIn.user_name,
        password: this.usersLogIn.password,
        // keepLogged: this.keepLogged,
      })
      .subscribe(
        (res) => {
          this.isLogin = false;
          console.log(res);
          this.router.navigate(['/home']);
        },
        (error) => {
          this.isLogin = false;
        }
      );
  }

}
