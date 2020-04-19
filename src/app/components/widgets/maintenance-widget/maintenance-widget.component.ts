import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { MenuNavigationService} from '../../../services/menu/menu-navigation.service';
import { environment } from './../../../../environments/environment';
import * as $ from 'jquery';


@Component({
  selector: 'app-maintenance-widget',
  templateUrl: './maintenance-widget.component.html',
  styleUrls: ['./maintenance-widget.component.css']
})
export class MaintenanceWidgetComponent implements OnInit {
  showMobileMenu: boolean;
  maintenanceOutput: any;
  pricingList: any[];
  sortedPricing: any[];
  public base: any;
  public apis: any;

  constructor(private menu: MenuNavigationService, public appcomp: AppComponent) {}

  noScroll() {
    $('body').css('overflow', 'hidden');
  }

  purchaseMaintenancePlan(planId, planPrice, paymentPlanCode) {
    // console.log(arguments);
    //
  }

  ngOnInit() {
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
  }

}
