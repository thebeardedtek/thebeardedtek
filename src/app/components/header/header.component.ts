import { LocalStorageService } from './../../services/storage/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, Input } from '@angular/core';
import { AppComponent } from '../../app.component';
import { MenuNavigationService } from '../../services/menu/menu-navigation.service';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { flatMap } from 'rxjs/operators';
import { ScrollEvent } from 'ngx-scroll-event';
import * as moment from 'moment';
import { LoginService } from './../../services/login/login.service';
import { FormGroup, FormControl } from '@angular/forms';
const yPosition = window.pageYOffset;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ MenuNavigationService ]
})

export class HeaderComponent implements OnInit {


  public showMenu: Boolean;
  public showForm: Boolean;
  public isSignedIn: Boolean;
  public showMobileMenu: Boolean;
  public showMobileMenuFixed: Boolean;
  public dropdown: String;
  public yPos = yPosition;
  public headerMenu: any;
  public parentMenu = [];
  public mobileParentMenu = [];
  public childMenu = [];
  public base: any;
  public apis: any;
  public showLoginModal: boolean;
  public showLogoutModal: boolean;

  // tslint:disable-next-line: max-line-length
  constructor(public menu: MenuNavigationService, public appcomp: AppComponent, public http: HttpClient, public route: Router, public login: LoginService, public local: LocalStorageService) {}


  public changeHeaderClass(event: ScrollEvent) {
    if (window.pageYOffset > 150) {
        $('#header').addClass('header-scroll');
      } else {
        $('#header').removeClass('header-scroll');
      }


    if (event.isReachingTop) {
      if (window.pageYOffset > 150) {
        $('#header').addClass('header-scroll');
      } else {
        $('#header').removeClass('header-scroll');
      }
    }
  }

  toggleLoginModal(){
    if(this.showLoginModal === true){
      this.showLoginModal = false;
    } else {
      this.showLoginModal = true;
    }
    this.showLogoutModal = false;
  }

  toggleLogOutModal(){
    if(this.showLogoutModal === true){
      this.showLogoutModal = false;
    } else {
      this.showLogoutModal = true;
    }

    this.showLoginModal = false;
  }

  receiveModalChange($event){
    console.log('$event', $event);
    this.showLoginModal = $event;
  }

  receiveModalChangeOut($event){
    console.log('$event', $event);
    this.showLogoutModal = $event;
  }

  hoverMenu(item: string) {
    this.dropdown = item;
  }

  hideMenu() {
    this.dropdown = null;
  }

  toggleMenu() {
    if (this.showMenu === true) {
      this.showMenu = false;
    } else {
      this.showMenu = true;
    }
  }

  toggleMobileMenu() {
    if (this.showMobileMenu === true) {
      this.showMobileMenu = false;
    } else {
      this.showMobileMenu = true;
    }
  }

  formatMenus(menu) {
    // tslint:disable-next-line: no-shadowed-variable
    menu.forEach((item) => {
      if (item.isTopLevel === false) {
      this.childMenu.push(item);
      }
    });

    // tslint:disable-next-line: no-shadowed-variable
    menu.forEach((item) => {
      if (item.isTopLevel === true) {
      this.parentMenu.push(item);

      this.parentMenu.sort((a, b) => {
         return a.sequence - b.sequence;
       });

      }
    });

    // tslint:disable-next-line: no-shadowed-variable
    menu.forEach((item) => {
      if (item.isMobileTopLevel && item.isEnabled) {
      this.mobileParentMenu.push(item);

      this.mobileParentMenu.sort((a, b) => {
         return a.sequence - b.sequence;
       });
      }
    });
  }

  getMenus() {
    this.headerMenu = [];
    this.menu.getMenuItemsRest().subscribe(items => {
       this.headerMenu = items;
       this.formatMenus(this.headerMenu);
     });
  }

  isHomePage() {
    if (this.route.url === '/' || this.route.url === '' || this.route.url.length < 2) {
      return true;
    } else {
      return false;
    }
  }

  checkLoginStatus() {
    return this.login.tokenIsValid();
  }

ngOnInit() {
  this.showLoginModal = false;
  this.showLogoutModal = false;
  this.showMobileMenu = false;
  this.showMobileMenuFixed = false;
  this.headerMenu = [];
  this.isSignedIn = this.appcomp.isSignedIn;
  this.base = environment.restAPI.baseURL;
  this.apis = environment.restAPI.apis;
  this.checkLoginStatus();
  this.getMenus();
}

}
