import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseURL = environment.restAPI.baseURL;
  loginAPI = environment.restAPI.apis.login;
  registerAPI = environment.restAPI.apis.register;

  constructor(private http: HttpClient) { }

  formatPayload(payload){
    payload.clientPassword = payload.clientPassword ? payload.clientPassword.toLowerCase().trim() : null;
    payload.clientEmail = payload.clientEmail ? payload.clientEmail.toLowerCase().trim() : null;
    return payload;
  }

  processRegisterForm(payload) {
    return this.http.post(this.baseURL + this.registerAPI, payload);
  }
}
