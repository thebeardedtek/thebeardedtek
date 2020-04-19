import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  public baseUrl = environment.restAPI.baseURL;
  public apis = environment.restAPI.apis;

  constructor(public http: HttpClient) { }

  getStripeCustomer(query){
    return this.http.get(`${this.baseUrl}${this.apis.stripeCustomer}?customerId=${query.stripeId}`);
  }
}
