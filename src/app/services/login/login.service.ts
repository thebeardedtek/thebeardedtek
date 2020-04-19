import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { environment } from './../../../environments/environment';
import { CommonService } from '../common/common.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from './../../services/storage/local-storage.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {

  baseURL = environment.restAPI.baseURL;
  loginAPI = environment.restAPI.apis.login;
  userAPI = environment.restAPI.apis.user;
  registerAPI = environment.restAPI.apis.register;
  forgotAPI = environment.restAPI.apis.forgot;

  public isLoggedIn: Boolean;
  public userHasSession: Boolean;
  public loginOpts: any[];
  public loginType: String;
  public forgotEmail: Boolean;
  public loginErrors: Boolean;
  public loginFailed: Boolean;
  public loginErrorsArray: any[];
  public currentUser;
  public loginSubscription: any;
  public userType: String;
  public userEmail: String;
  public clientEmail: String;
  public token: any;
  public user: any;
  public now: any;
  public expirationDate: any;
  public isExpired: any;

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private common: CommonService, public jwtHelper: JwtHelperService, private local: LocalStorageService, private router: Router) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }


  processLogin(form, accountType) {
    this.local.destroyUserSession();
    if (!this.userHasSession) {
      this.loginErrorsArray = [];
    }
    if (this.forgotEmail === true) {
      this.loginErrorsArray = [];
      this.loginErrorsArray.push('Recovery Email Sent');
    } else {
      this.loginSubscription = this.processLoginForm(form, accountType).subscribe((response: any) => {
        if (response.authorization === 'INVALID') {
          this.loginFailed = true;
          this.loginErrors = true;
          this.loginErrorsArray.push('User Not Found. Please Try Again.');
        } else {
          this.isLoggedIn = true;
          this.currentUser = response.client;
          this.currentUser.isLoggedIn = true;
          this.local.setLocalStorage(response);
        }
      });
    }
    return this.currentUser;
  }

  processLoginForm(payload, accountType) {
    this.local.destroyUserSession();
    payload.clientType = accountType;
    payload.clientPassword = payload.clientPassword ? this.common.stripTags(payload.clientPassword) : null;
    payload.clientEmail = payload.clientEmail ? this.common.stripTags(payload.clientEmail) : null;
    payload.lastSignIn = moment();

    // payload.clientPassword = payload.clientPassword ? this.common.stripTags(payload.clientPassword.toLowerCase()) : null;
    // payload.clientEmail = payload.clientEmail ? this.common.stripTags(payload.clientEmail.toLowerCase()) : null;
    return this.http.post(this.baseURL + this.loginAPI, payload);
}


processRegistrationForm(payload, accountType) {
    this.local.destroyUserSession();
    payload.clientType = accountType;
    payload.clientPassword = payload.clientPassword ? this.common.stripTags(payload.clientPassword) : null;
    payload.clientEmail = payload.clientEmail ? this.common.stripTags(payload.clientEmail) : null;

    // payload.clientPassword = payload.clientPassword ? this.common.stripTags(payload.clientPassword.toLowerCase()) : null;
    // payload.clientEmail = payload.clientEmail ? this.common.stripTags(payload.clientEmail.toLowerCase()) : null;

    return this.http.post(this.baseURL + this.registerAPI, payload);
}

processForgotPassword(payload) {
  // const payload = {'clientEmail': email};
  return this.http.post(this.baseURL + this.forgotAPI, payload);
}

tokenIsValid() {
  this.token = localStorage.getItem('token');
  this.user = localStorage.getItem('user');
  this.now = moment().format();
  if (this.token !== null) {
    this.expirationDate = this.jwtHelper.getTokenExpirationDate(this.token).toString();
    this.isExpired = moment(this.expirationDate).format() < this.now;
  }

  if (this.token && this.user && !this.isExpired) {
     this.setLogAndSession();
    return true;
  } else {
    this.removeLogAndSession();
    return false;
  }
}

refreshUser() {
  if (this.tokenIsValid()) {
    this.userHasSession = true;
    return this.http.get(`${this.baseURL}${this.userAPI}?clientEmail=${this.user}&token=${this.token}`);
  }
}

userLogout(user) {
  if (user) {
    this.userType = user.clientCode;
  } else {
    this.userType = 'CORPORATE';
  }

  this.local.destroyUserSession();
  if (this.userType === 'CORPORATE') {
    this.removeLogAndSession();
    this.loginOpts = [];
    this.loginType = 'Email';
    this.forgotEmail = false;
    this.loginErrors = false;
    this.loginFailed = false;
    this.loginErrorsArray = [];
    this.currentUser = null;
    this.loginSubscription = null;
    this.router.navigate(['/']);
  } else if (this.userType === 'STUDENT') {
    this.removeLogAndSession();
    this.loginOpts = [];
    this.loginType = 'Email';
    this.forgotEmail = false;
    this.loginErrors = false;
    this.loginFailed = false;
    this.loginErrorsArray = [];
    this.currentUser = null;
    this.loginSubscription = null;
    this.router.navigate(['/']);
  } else {
    this.router.navigate(['/']);
  }

  // this.ngOnInit();
}

isLoggedInFn() {
  return this.isLoggedIn;
}

userHasSessionFn() {
  return this.userHasSession;
}

setLogAndSession() {
  this.isLoggedIn = true;
  this.userHasSession = true;
}

removeLogAndSession() {
  this.isLoggedIn = false;
  this.userHasSession = false;
}

refreshPage() {
    this.common.refreshPage();
}

// tslint:disable-next-line: use-life-cycle-interface
ngOnInit() {
  this.isLoggedIn = false;
  this.userHasSession = false;
  this.loginOpts = [];
  this.loginType = 'Email';
  this.forgotEmail = false;
  this.loginErrors = false;
  this.loginFailed = false;
  this.loginErrorsArray = [];
  this.currentUser = null;
  this.loginSubscription = null;
  this.userType = 'CORPORATE';
  

}
// tslint:disable-next-line: use-life-cycle-interface
ngOnDestroy() {

}

}
