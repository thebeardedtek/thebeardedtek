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
export class DocumentsService {

  public baseURL = environment.restAPI.baseURL;
  public documentsAPI = environment.restAPI.apis.documents;

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private common: CommonService, public jwtHelper: JwtHelperService, private local: LocalStorageService, private router: Router) { }


  getCurrentUserDoc(profileDocReference){
    return this.http.get(`api/documents?docReference=${profileDocReference}`);
  }

  saveDocument(profilepic){
    console.log('saveDocument', profilepic);
    return this.http.post(`${this.baseURL}${this.documentsAPI}`, profilepic);
  }

  getMimeTypes(){
    return this.http.get(`api/mimetypes`);
  }
}
