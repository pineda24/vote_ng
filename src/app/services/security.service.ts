import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Observer } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataService } from './data.service';
import { Users } from '../models/users.model';
@Injectable({ providedIn: 'root' })
export class SecurityService {
  jwt: any;
  pictureProfile: any;
  constructor(private http: HttpClient, private dataService: DataService) {
    this.jwt = new JwtHelperService();
  }

  private authenticated: Boolean = false;
  private userChanges = new EventEmitter<any>();
  public userChangePictureProfile = new EventEmitter<any>();
  private currentUser: any;

  login(credentials: any): Observable<any> {
    return new Observable((observer) => {
      this.http
        .post(environment.serverBaseURL + '/users/login', credentials)
        .subscribe(
          (res: any) => {
            if (!res) {
              observer.error();
            } else {
              if (res['user'] && res['token']) {
                this.authenticated = true;
                this.userChanges.emit(res['user']);
                this.currentUser = res['user'];

                localStorage.setItem('thDbbr1sEcZmxHwz', res['token']);
                console.log(res);
              }
              observer.next(res);
            }
            // observer.complete();
          },
          (error) => {
            observer.error(error);
          }
        );
    });
  }

  signup(obj: any): Observable<any> {
    return new Observable((observer) => {
      this.http
        .post(
          environment.serverBaseURL + environment.api + '/users/register',
          obj
        )
        .subscribe(
          (res) => {
            if (!res) {
              observer.error();
            } else {
              observer.next(res);
            }
            observer.complete();
          },
          (error) => {
            observer.error(error);
          }
        );
    });
  }

  changePassword(obj: any) {
    return this.http.put(
      environment.serverBaseURL + environment.api + '/users/recoverpassword',
      obj
    );
  }

  newPassword(obj: any) {
    return this.http.put(
      environment.serverBaseURL + environment.api + '/users/newpassword',
      obj
    );
  }

  setPassword(obj: any) {
    return this.http.put(
      environment.serverBaseURL + environment.api + '/users/resetpassword',
      obj
    );
  }

  isTokenExpired() {
    console.log('Expired: ' + this.jwt.isTokenExpired(this.getToken()));
    return this.jwt.isTokenExpired(this.getToken());
  }

  logout(): Observable<any> {
    return new Observable((observer) => {
      this.authenticated = false;
      this.currentUser = null;

      localStorage.removeItem('thDbbr1sEcZmxHwz');
      localStorage.removeItem('name');
      localStorage.removeItem('cookie');

      this.userChanges.emit();
      observer.next();
      observer.complete();
    });
  }

  getAccountId() {
    return localStorage.getItem('accountId');
  }

  getToken() {
    console.log(localStorage.getItem('thDbbr1sEcZmxHwz'));
    return localStorage.getItem('thDbbr1sEcZmxHwz');
  }

  getCookie() {
    return localStorage.getItem('cookie');
  }

  async getCurrentUser(): Promise<Users | any> {
    if (this.currentUser) {
      return this.currentUser;
    }
    var obj = this.jwt.decodeToken(this.getToken());

    try {
      if (obj) {
        let res = await this.dataService
          .findByFilter('/users/login', {
            email: obj.username,
            password: '1234',
          })
          .toPromise();
        console.log(res);
        if (res) {
          this.currentUser = res;
          return this.currentUser;
        } else {
          return null;
        }
      } else {
        return null;
      }
    } catch (err) {
      return null;
    }
  }

  async isAuthenticated() {
    let cur = await this.getCurrentUser();
    console.log("Current user: "+cur);
    if (this.currentUser) {
      // this.authenticated = await this.dataService
      //   .findById('/users/activeStatus', this.currentUser._id)
      //   .toPromise();
      console.log('A');
      return true;
    } else {
      console.log('B');
      return false;
    }
    return this.authenticated;
  }

  getUserChangesEmitter() {
    return this.userChanges;
  }

  getUserChangePictureProfile() {
    this.pictureProfile = localStorage.getItem('profilePicture');
    return this.pictureProfile;
  }

  UserChangePictureProfile(picture: any) {
    localStorage.setItem('profilePicture', picture);
    return this.userChangePictureProfile.emit(picture);
  }

  getCurrentUserRoles() {
    if (this.currentUser) {
      return this.currentUser.role;
    }

    var obj = this.jwt.decodeToken(this.getToken());
    if (obj && obj.role) {
      return obj.role;
    } else {
      return [];
    }
  }

  hasPermisions(roles: any) {
    let currentRoles = this.getCurrentUserRoles();

    if (roles && currentRoles) {
      return roles.some((role: any, index: any, x: any) => {
        if (currentRoles.indexOf(role) > -1) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      return false;
    }
  }
}
