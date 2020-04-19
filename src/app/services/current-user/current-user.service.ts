import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { environment } from './../../../environments/environment';
import { CommonService } from '../common/common.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from './../../services/storage/local-storage.service';
import { LoginService } from './../../services/login/login.service';
import { DocumentsService } from './../../services/documents/documents.service';

import { Router } from '@angular/router';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
public baseUrl = environment.restAPI.baseURL;
public apis = environment.restAPI.apis;
public doneRefreshingUser: any;
public emailError: any;
public currentUser: any;
public clientProfile: any;
public isLoggedIn: Boolean;
public userHasSession: Boolean;





// tslint:disable-next-line: max-line-length
constructor(public login: LoginService, public http: HttpClient, public local: LocalStorageService, public jwt: JwtHelperService, public common: CommonService, public docs: DocumentsService) {
this.isLoggedIn = this.login.isLoggedInFn();
this.userHasSession = this.login.userHasSessionFn();
}


  getCurrentUser() {
    this.doneRefreshingUser = false;
    this.emailError = false;
    this.currentUser = {};

      if (this.login.tokenIsValid()) {
      this.login.refreshUser().subscribe((response) => {
        if (response) {
          this.currentUser = response[0];
          console.log(response);
          // console.log('this.currentUser from refreshUser', this.currentUser);
          // this.docs.getCurrentUserDoc(this.currentUser.profileDocReference).subscribe((response: any) => {
          //   if (response.status === 200) {
          //     this.clientProfile.payload = this.currentUser;
          //     this.clientProfile.payload.clientAvatar = this.getAvatar(this.currentUser);
          //     this.isLoggedIn = true;
          //   } else {
          //     this.clientProfile.payload = {};
          //     this.isLoggedIn = true;
          //     return null;
          //   }
          // });

        } else {
          return {};
        }
    });
    } else {
      return {};
    }
    this.doneRefreshingUser = true;

  }


}
