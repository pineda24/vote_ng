import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-start-session',
  templateUrl: './start-session.component.html',
  styleUrls: ['./start-session.component.css'],
})
export class StartSessionComponent implements OnInit {
  remindMe: boolean = false;
  username: string = '';
  password: string = '';
  keepLogged: boolean = false;
  errorMessage: string = '';
  isLogin: boolean = false;

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
    this.securityService
      .login({
        email: 'a338919@uach.mx',
        password: '1234',
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
