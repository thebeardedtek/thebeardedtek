import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { environment } from './../../../environments/environment';
import { Title, Meta } from '@angular/platform-browser';
import { CommonService } from './../../services/common/common.service';
import { GoogleAnalyticsService } from './../../services/google-analytics/google-analytics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showMaintenancePrices: Boolean;
  public base: any;
  public apis: any;

  constructor(private titleService: Title, private meta: Meta, private common: CommonService, private analytics: GoogleAnalyticsService, public router: Router) {}

  toggleMaintenance() {
    this.showMaintenancePrices = !this.showMaintenancePrices;
  }

  getMeasurements() {
    return {'width.px': window.innerWidth, 'height.px': window.innerHeight };
  }

  gaEventPricing() {
    // public eventEmitter(
    //   eventName: string,
    //   eventCategory: string,
    //   eventAction: string,
    //   eventLabel: string = null,
    //   eventValue: number = null ) {
    //        gtag('event', eventName, {
    //                eventCategory: eventCategory,
    //                eventLabel: eventLabel,
    //                eventAction: eventAction,
    //                eventValue: eventValue
    //              });
    //   }
    this.analytics.eventEmitter('go_to_pricing', 'route', 'click', 'Go_To_Pricing', 1);
    this.router.navigate(['/pricing']);
    
  }

  ngOnInit() {
    window.scroll(0, 0);
    this.titleService.setTitle(`Mobile Website & App Design Atlanta | thebeardedtek`);
    this.meta.updateTag({ name: 'description', content: `Mobile Apps and Web Sites for entrepreneurs and small businesses. Each site is strategically developed and maintained with your target audience in mind. Schedule a Demo today for more information.`});
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
    this.showMaintenancePrices = false;  }
}
