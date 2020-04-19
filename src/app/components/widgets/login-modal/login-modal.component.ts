import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from './../../../services/storage/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../../app.component';
import { LoginModalService } from './../../../components/widgets/login-modal/login-modal.service';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { LoginService } from './../../../services/login/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../../../services/common/common.service';
// /Users/chocmuscguy/Desktop/thebeardedtek/app/src/app/services/common.service.ts
import { isDevMode } from '@angular/core';
import { HistoryService } from './../../../services/history/history.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  @Input() showLoginModal: boolean;
  @Input() showLogoutModal: boolean;
  @Output() hideLoginModal = new EventEmitter();
  @Output() hideLogoutModal = new EventEmitter();

  public isSignedIn: Boolean;
  public base: any;
  public apis: any;
  public currentUser: any;
  public loginFailed: Boolean;
  public loginErrors: Boolean;
  public isLoggedIn: Boolean;
  public loginErrorsArray: any[];
  public forgotEmail: Boolean;
  public loginOpts: String;
  public logoutModal: Boolean;
  public accountType: string;
  public registerUser: Boolean;
  public forgotPasswordSent: Boolean;

  /*
  clientEmail must be a valid email address
  clientPassword must be at least 8 characters, include a number and text and at least 1 special character; maxlength 20

  */
  headerLogin = new FormGroup({
    clientEmail: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(30),
    ]),
    clientPassword: new FormControl(''),
  });




  // tslint:disable-next-line: max-line-length
  constructor(public appcomp: AppComponent, public http: HttpClient, public route: Router, public login: LoginService, public local: LocalStorageService, public loginMod: LoginModalService, public common: CommonService, public router: Router, public history: HistoryService) { }

  onGoogleSuccess(googleUser){
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  isValidEmail(email){
    const isValid = this.common.isValidEmailAddress(email.value);
    if(isValid){this.setDirty();} else {this.setClean();}
    return isValid;
  }

  closeLoginModal(): void{
    this.showLoginModal = false;
    this.showLogoutModal = false;
    this.headerLogin.markAsPristine();
    this.logoutModal = false;
    this.forgotEmail = false;
    this.forgotPasswordSent = false;
    this.headerLogin.reset();
    this.hideLoginModal.emit(this.showLoginModal);
    this.hideLogoutModal.emit(this.showLogoutModal);
  }

  closeLogoutModal(): void{
    this.showLoginModal = false;
    this.showLogoutModal = false;
    this.headerLogin.markAsPristine();
    this.logoutModal = false;
    this.forgotEmail = false;
    this.forgotPasswordSent = false;
    this.headerLogin.reset();
    this.hideLoginModal.emit(this.showLoginModal);
    this.hideLogoutModal.emit(this.showLogoutModal);
  }

  checkLoginStatus(): boolean {
    return this.login.tokenIsValid();
  }

  loginModal(): void {
    this.headerLogin.markAsPristine();
    this.logoutModal = false;
    this.forgotEmail = false;
    this.forgotPasswordSent = false;
    this.headerLogin.reset();
  }

  openLogoutModal(): void {
    this.logoutModal = true;
    this.headerLogin.markAsPristine();
    this.forgotEmail = false;
    this.forgotPasswordSent = false;
    this.headerLogin.reset();
  }

  processHeaderLogin(): void {
    this.history.sendHistory(`LOGIN`).subscribe((response) => null);
    this.headerLogin.markAsDirty();
    this.login.processLoginForm(this.headerLogin.value, 'CLIENT').subscribe((item: any) => {

      if (item.authorization === 'INVALID') {
        this.loginFailed = true;
        this.loginErrors = true;
        this.loginErrorsArray = [];
          this.loginErrorsArray.push('Error Logging In. Please check your email and password');
      } else {
        this.local.setLocalStorage(item);
        this.currentUser = item.client;
        this.isLoggedIn = true;
        this.showLoginModal = false;
        this.hideLoginModal.emit(this.showLoginModal);
        this.router.navigate(['/clients']);
      }
    });
    this.forgotPasswordSent = false;
  }


  processHeaderRegistration(): void {
    this.history.sendHistory(`REGISTER`).subscribe((response) => null);
      this.login.processRegistrationForm(this.headerLogin.value, 'CLIENT').subscribe((item: any) => {
      if (item.authorization === 'INVALID') {
        this.loginFailed = true;
        this.loginErrors = true;
        this.loginErrorsArray = [];
        this.local.destroyUserSession();
        this.loginErrorsArray.push('Error Logging In. Please check your email and password');
      } else {
        this.local.setLocalStorage(item);
        this.currentUser = item;
        this.accountType = 'CLIENT';
        this.registerUser = false;
        this.login.setLogAndSession();
        this.resetForm();
        this.showLoginModal = false;
        this.hideLoginModal.emit(this.showLoginModal);
        this.router.navigate(['/clients']);
      }
    });
    this.forgotPasswordSent = false;
  }

toggleRegister(): void {
  this.headerLogin.markAsPristine();
  this.headerLogin.reset();
  this.loginErrors = false;
  this.loginErrorsArray = [];
  this.registerUser = !this.registerUser;
}

processForgotPassword(): void {
  const payload = this.headerLogin.value;
  this.forgotPasswordSent = true;
  this.login.processForgotPassword(payload).subscribe((response) => {

  });
}

toggleForgotPassword(email: string): void {
  this.forgotEmail = !this.forgotEmail;
  this.headerLogin.markAsPristine();
  this.loginErrors = false;
  this.loginErrorsArray = [];
  this.login.processLogin(this.headerLogin.value, 'CLIENT');
}

resetForm(): void {
  this.headerLogin.reset();
  this.headerLogin.markAsPristine();
  this.forgotEmail = false;
  this.registerUser = false;
  this.forgotPasswordSent = false;
  this.loginErrors = false;
  this.loginErrorsArray = [];
}

setDirty(): void {
  this.headerLogin.markAsDirty();
}

setClean(): void {
  this.headerLogin.markAsPristine();
}

setActiveLoginType(type): void {
  this.loginOpts = type;
}

logout(): void {
  if (this.currentUser) {
    this.login.userLogout(this.currentUser);
    this.showLoginModal = false;
    this.hideLoginModal.emit(this.showLoginModal);
    this.showLogoutModal = false;
    this.hideLogoutModal.emit(this.showLogoutModal);
  } else {
    this.login.userLogout(null);
    this.showLoginModal = false;
    this.hideLoginModal.emit(this.showLoginModal);
    this.showLogoutModal = false;
    this.hideLogoutModal.emit(this.showLogoutModal);
  }

  this.refreshModals();
}

refreshModals() {
  this.logoutModal = false;
  this.resetForm();
}

  ngOnInit() {
    this.forgotPasswordSent = false;
    this.registerUser = false;
    this.isSignedIn = this.appcomp.isSignedIn;
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
    this.headerLogin.markAsPristine();
    this.refreshModals();
    this.checkLoginStatus();
    if(isDevMode()){
      this.headerLogin.controls['clientEmail'].setValue('west@west.com');
      this.headerLogin.controls['clientPassword'].setValue('westcoas');
    }
    
  }


}
