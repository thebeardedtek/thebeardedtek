import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { CommonService } from '../../../services/common/common.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from './../../../services/storage/local-storage.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioPageService {

  public baseURL = environment.restAPI.baseURL;
  public loginAPI = environment.restAPI.apis.login;
  public userAPI = environment.restAPI.apis.user;
  public portfolioType = environment.restAPI.apis.portfolioTypes;
  public webapps = environment.restAPI.apis.webapps;


  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private common: CommonService, public jwtHelper: JwtHelperService, private local: LocalStorageService, private router: Router) { }

  getAllPortfolioTypes(){
    return this.http.get(`${this.baseURL}${this.portfolioType}`);
  }

  getAllWebapps(){
    return this.http.get(`${this.baseURL}${this.webapps}`);
  }
}
