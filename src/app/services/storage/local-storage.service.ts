
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  userInSession: any;
  userHasSession = false;


  constructor(public jwtHelper: JwtHelperService) { }


  setLocalStorage(user) {
    localStorage.clear();
    localStorage.setItem('key', user.client._id);
    localStorage.setItem('user', user.client.clientEmail);
    localStorage.setItem('token', user.token);
    this.userHasSession = true;
    this.setSessionStorage(user);
  }


   setSessionStorage(user) {
    sessionStorage.clear();
    this.userInSession = user;
    sessionStorage.setItem('key', user.client._id);
    sessionStorage.setItem('user', user.client.clientEmail);
    sessionStorage.setItem('token', user.token);
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  clearSessionStorage() {
    sessionStorage.clear();
  }

  destroyUserSession() {
    sessionStorage.removeItem('key');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    localStorage.removeItem('key');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userInSession = null;
    this.userHasSession = false;
  }

  userHasValidSession() {
    const hasKey = localStorage.getItem('key');
    const hasToken = localStorage.getItem('token');
    const hasUser = localStorage.getItem('user');
    const now = moment().format();
    let isExpired;

    if (hasToken) {
      const expirationDate = this.jwtHelper.getTokenExpirationDate(hasToken).toString();
      isExpired = moment(expirationDate).format() < now;
    } else {
      isExpired = null;
    }

    if (hasKey && hasToken && hasUser && !isExpired) {
      this.userHasSession = true;
      return true;
    } else {
      this.destroyUserSession();
      return false;
    }
  }
}
