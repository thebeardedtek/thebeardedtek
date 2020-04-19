import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BannerService {

  public base = environment.restAPI.baseURL;
  public banner = environment.restAPI.apis.banner;

  constructor(public http: HttpClient) { }

  getBannerImagesSvc(){
    return this.http.get(`${this.base}${this.banner}`);
  }
}
