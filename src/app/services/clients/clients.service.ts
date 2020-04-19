import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { environment } from './../../../environments/environment';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common/common.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from './../../services/storage/local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ClientsService implements OnInit{
public baseURL = environment.restAPI.baseURL;
public loginAPI = environment.restAPI.apis.login;
public userAPI = environment.restAPI.apis.user;
public registerAPI = environment.restAPI.apis.register;
public projectsAPI = environment.restAPI.apis.projects;
public billingAPI = environment.restAPI.apis.billing;
public coursesAPI = environment.restAPI.apis.courses;
public projectStatusAPI = environment.restAPI.apis.projectStatus;
public cancelAPI = environment.restAPI.apis.cancel;
public currentUser:ClientsModel.ClientsInterface;

  constructor(private http: HttpClient, public local: LocalStorageService) { }

getCurrentUserFormat(){
  this.currentUser = {
    clientEmail:null,
    clientPassword:null,
    clientType:null,
    clientAccountNum:null,
    clientFirstName:null,
    stripeId:null,
    clientLastName:null,
    clientMiddleName:null,
    clientPhone1:null,
    clientPhone2:null,
    enableFacebook:null,
    enableInstagram:null,
    enableTwitter:null,
    facebookHandle:null,
    instagramHandle:null,
    linkedinHandle:null,
    twitterHandle:null,
    clientAvatar:null,
    profileDocReference:null,
    lastSignIn:null,
    projects:null,
    courses:null,
    clientCourses:null,
    active:null,
  }; 
  return this.currentUser;
}

getProjectStatus(){
  return this.http.get(`${this.baseURL}${this.projectStatusAPI}`);
}

  saveUserDetails(payload){
    if(payload){
      payload.token = localStorage.getItem('token');
      return this.http.put(this.baseURL + this.userAPI, payload);
    }
  }

  getClientProjects(payload){
    if(payload){
      payload.token = localStorage.getItem('token');
      return this.http.get(`${this.baseURL}${this.projectsAPI}?clientemail=${payload.clientEmail}`);
    }
  }

  saveClientProjects(payload){
    if(payload){
      payload.token = localStorage.getItem('token');
      return this.http.post(`${this.baseURL}${this.projectsAPI}`, payload);
    }
  }

  updateClientProjects(payload){
    if(payload){
      payload.token = localStorage.getItem('token');
      return this.http.put(`${this.baseURL}${this.projectsAPI}`, payload);
    }
  }

  getClientCourses(payload){
    if(payload){
      payload.token = localStorage.getItem('token');
      return this.http.get(`${this.baseURL}${this.coursesAPI}?clientemail=${payload.clientEmail}`);
    }
  }

  saveClientCourses(payload){
    if(payload){
      payload.token = localStorage.getItem('token');
      return this.http.post(`${this.baseURL}${this.coursesAPI}`, payload);
    }
  }

  updateClientCourses(payload){
    if(payload){
      payload.token = localStorage.getItem('token');
      return this.http.put(`${this.baseURL}${this.coursesAPI}`, payload);
    }
  }

  getClientBillling(payload){
    if(payload){
      payload.token = localStorage.getItem('token');
      return this.http.get(`${this.baseURL}${this.billingAPI}?clientemail=${payload.clientEmail}`);
    }
  }

  saveClientBilling(payload){
    if(payload){
      payload.token = localStorage.getItem('token');
      return this.http.post(`${this.baseURL}${this.billingAPI}`, payload);
    }
  }

  updateClientBilling(payload){
    if(payload){
      payload.token = localStorage.getItem('token');
      return this.http.put(`${this.baseURL}${this.billingAPI}`, payload);
    }
  }

  cancelUserAccount(user){
    return this.http.post(`${this.baseURL}${this.cancelAPI}`, user);
  }




  ngOnInit() {

  }
}
