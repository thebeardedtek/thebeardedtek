import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { MenuNavigationService} from '../../../services/menu/menu-navigation.service';
import { environment } from './../../../../environments/environment';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { PricingService } from '../../../services/pricing/pricing.service';


@Component({
  selector: 'app-pricing-widget',
  templateUrl: './pricing-widget.component.html',
  styleUrls: ['./pricing-widget.component.css'],
  providers: [PricingService]
})
export class PricingWidgetComponent implements OnInit {
  color = 'primary';
  checked = true;
  disabled = false;
  public base: any;
  public apis: any;
  public pricingPlans: any;

  period = 'MONTHLY';

  showMobileMenu: boolean;

  constructor(private menu: MenuNavigationService, public appcomp: AppComponent, public router: Router, public pricing: PricingService) { }

  selectPlan(plan) {
    this.router.navigate([`/signup`, plan]);
  }

  togglePricing() {
    this.checked = !this.checked;

    if (this.checked === true) {
      this.period = 'MONTHLY';
    } else {
      this.period = 'YEARLY';
    }
  }

  getPricingPlans() {
    this.pricingPlans = {};
    const pricingData = this.pricing.getAllPricingPlans().subscribe(response => {
      if (response) {
        this.pricingPlans = response[0];
      } else {
         this.pricingPlans = {};
      }
    });
  }

  noScroll() {
    $('body').css('overflow', 'hidden');
  }

  ngOnInit() {
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
    this.pricingPlans = {};
    this.pricingPlans.core = {};
    this.pricingPlans.plus = {};
    this.pricingPlans.marketing = {};
    this.pricingPlans.app = {};
    this.getPricingPlans();
  }

}
