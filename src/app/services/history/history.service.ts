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
export class HistoryService {

  public baseURL = environment.restAPI.baseURL;
  public historyAPI = environment.restAPI.apis.history;


  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private common: CommonService, public jwtHelper: JwtHelperService, private local: LocalStorageService, private router: Router) { }

  sendHistory(action){

    function getAction(){
      switch(action){
        case `ACCESSED_SITE`: return `ACCESSED_SITE`;
        break;
        case `CONTACT_FORM`: return `CONTACT_FORM`;
        break;
        case `REGISTER`: return `REGISTER`;
        break;
        case `LOGIN`: return `LOGIN`;
        break;
        default: return `ACCESSED_SITE`;
      }
    }

    const payload = {
      action: getAction(),
      createdDate: new Date(),
      device:{
        screen: window.screen,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      },
      navigator: {
        cookieEnabled: window.navigator.cookieEnabled,
        appCodeName: window.navigator.appCodeName,
        appName: window.navigator.appName,
        appVersion: window.navigator.appVersion,
        platform: window.navigator.platform,
        userAgent: window.navigator.userAgent,
        language: window.navigator.language,
      },
      location: {
        origin: window.location.origin,
        protocol: window.location.protocol,
        host: window.location.host,
        hostname: window.location.hostname,
        port: window.location.port,
        pathname: window.location.pathname,
        search: window.location.search,
        href: window.location.href,
      }
    };

    console.log('payload', payload);
    return this.http.post(`${this.baseURL}${this.historyAPI}`, payload);
    // return this.http.post(`${this.baseURL}${this.documentsAPI}`, profilepic);

  }


}
 