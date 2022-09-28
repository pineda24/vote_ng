import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersSignup } from 'src/app/models/usersignup.model';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  usersSignup: UsersSignup = new UsersSignup();

  constructor(
    private securityService: SecurityService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  signup(){
    console.log('[LoginComponent][onLogin]');
    this.securityService
      .signup({
        email: this.usersSignup.email,
        password: this.usersSignup.password,
        confPassword: this.usersSignup.confPassword
        // keepLogged: this.keepLogged,
      })
      .subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/account/login']);
        },
        (error) => {
        }
      );
  }

}
