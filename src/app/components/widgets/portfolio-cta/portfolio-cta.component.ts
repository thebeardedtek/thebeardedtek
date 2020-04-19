import { Component, OnInit } from '@angular/core';
import { MenuNavigationService } from '../../../services/menu/menu-navigation.service';
import { AppComponent } from '../../../app.component';
import { environment } from './../../../../environments/environment';


@Component({
  selector: 'app-portfolio-cta',
  templateUrl: './portfolio-cta.component.html',
  styleUrls: ['./portfolio-cta.component.css']
})
export class PortfolioCtaComponent implements OnInit {

  isInView:boolean;
  showForm:any;
  showMobileMenu: any;
  public base: any;
  public apis: any;

  public portfolioToggle() {

    // if (event.isReachingBottom) {
    //   // this.isInView = true;
    // }
    // if (event.isReachingTop) {
    //   // this.isInView = false;
    // }
    // if (event.isWindowEvent) {
    //   this.isInView = true;
    // }

  }

  constructor(private menu: MenuNavigationService, public appcomp: AppComponent) {
  }

  // toggleForm(){
  //   this.showMobileMenu = false;
  //   this.appcomp.toggleForm();
  // }

  ngOnInit() {
    this.isInView = false;
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
  }

}
