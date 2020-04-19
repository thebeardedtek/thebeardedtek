import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';
import { LoginService } from './../../services/login/login.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  public base: any;
  public apis: any;

  constructor(public login: LoginService) { }

  checkLoginStatus() {
    return this.login.tokenIsValid();
  }

  ngOnInit() {
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
  }

}
