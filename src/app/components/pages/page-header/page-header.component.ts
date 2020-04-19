import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';
import{ PageHeaderService } from './page-header.service';
import { LoginService } from './../../../services/login/login.service';


@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  public base: any;
  public apis: any;
  public pageContent: any;
  public currentUrl: any;
  public pageHeadersList: any;

  constructor(public router: Router, public page: PageHeaderService, public login: LoginService) { }

  checkLoginStatus() {
    return this.login.tokenIsValid();
  }

  getPageHeaders(currentUrl) {
    this.pageHeadersList = [];
    this.page.getPageHeaders().subscribe((response: any) => {
      if(response.data){
        this.pageHeadersList = response.data;

      this.pageHeadersList.forEach((item) => {
        if (item.currentUrl === currentUrl) {
          this.pageContent = item;
        } else {
        // this.pageContent = {
        //   subtitle: 'BUILDING WEBSITES WORLDWIDE SINCE 2001',
        //   title: 'My creative team builds dynamic websites for entrepreneurs and small businesses',
        //   blurb: 'The name has changed over the years but the same quality product has persisted through two decades of success and client growth.',
        //   blurb2: 'Our hands-on business model has proven to be effective; delivering quality design and excellent marketing strategies to help your small business blossom.',
        //   buttonText: 'View Pricing',
        //   buttonText2: 'Become a Client',
        //   buttonLink: '/pricing',
        //   buttonLink2: '/signup',
        //   headerImgWebp: 'page-header-web-design.webp',
        //   headerImgJpg: 'page-header-web-design.jpg',
        //   backgroundWebp: './',
        //   backgroundJpg: './',
        //   currentUrl: '/web-design',
        //   class: 'page-header-web-design',
        // };
      }
      });
      }
    });
  }

  getCurrentUrl() {
    window.scroll(0,0);
    this.currentUrl = this.router.url;
    this.getPageHeaders(this.currentUrl);
    return this.currentUrl;
  }

  ngOnInit() {
    this.pageHeadersList = [];
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
    this.getCurrentUrl();



  }

}
