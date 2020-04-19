import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { MenuNavigationService} from '../../../services/menu/menu-navigation.service';
import { ScrollEvent } from 'ngx-scroll-event';


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

public isInViewDesign: boolean;
public appDetails: boolean;
public webDetails: boolean;
public marketDetails: boolean;
public showMenu: any;
public showMobileMenu: any;
public showAppBg: boolean;
public showResponsiveBg: boolean;
public base: any;
public apis: any;

  public responsiveDemoInView() {

      // if (event.isReachingBottom) {
      //   // this.isInViewDesign = true;
      // }
      // if (event.isReachingTop) {
      //   // this.isInViewDesign = false;
      // }
      // if (event.isWindowEvent) {
      //   this.isInViewDesign = true;
      // }

    }

  constructor(private menu: MenuNavigationService, public appcomp: AppComponent) { }

  // toggleForm(){
  //   this.showMobileMenu = false;
  //   this.appcomp.toggleForm();
  // }

  viewMore(view) {
    switch (view) {
      case 'appDetails': this.appDetails = !this.appDetails; break;
      case 'webDetails': this.webDetails = !this.webDetails; break;
      case 'marketDetails': this.marketDetails = !this.marketDetails; break;
      default: break;
    }
  }

  toPortfolio() {
    this.showMenu = false;
    this.showMobileMenu = false;
  }

  onScrollSolutions(event:ScrollEvent){

    if (event.isReachingTop) {

      if(this.showAppBg === false){
        if (window.pageYOffset > 900) {
        this.showAppBg = true;
      }
      }

      if(this.showResponsiveBg === false){
        if (window.pageYOffset > 1600) {
        this.showResponsiveBg = true;
      }
      }





    } else {

      if(this.showAppBg === false){
        if (window.pageYOffset > 500) {
        this.showAppBg = true;
      }
      }


      if(this.showResponsiveBg === false){
        if (window.pageYOffset > 1000) {
        this.showResponsiveBg = true;
      }
      }


      }
  }


  ngOnInit() {
    this.isInViewDesign = false;
    this.showAppBg = false;
    this.showResponsiveBg = false;
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;

  }

}
