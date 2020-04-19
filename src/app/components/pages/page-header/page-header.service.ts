import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageHeaderService {
  public base = environment.restAPI.baseURL;
  public apis = environment.restAPI.apis;

  constructor(public http: HttpClient) { }

  getPageHeaders(){
    return this.http.get(`${this.base}${this.apis.pageHeader}`);
  }
}
