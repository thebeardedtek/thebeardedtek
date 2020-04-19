import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactWidgetService {

  public base = environment.restAPI.baseURL;
  public contact = environment.restAPI.apis.contactForm;

  constructor(public http: HttpClient) { }



  postContactForm(payload){
    return this.http.post(`${this.base}${this.contact}`, payload);
  }

}
