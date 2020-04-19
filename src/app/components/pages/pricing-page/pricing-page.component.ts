import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { Title, Meta } from '@angular/platform-browser';
import { PricingService } from '../../../services/pricing/pricing.service';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.css']
})
export class PricingPageComponent implements OnInit {
  public base: any;
  public apis: any;
  pricingPlans: any;

  constructor(private titleService: Title, private meta: Meta, public router: Router, public pricing: PricingService) { }

  selectPlan(plan) {
    this.router.navigate([`/signup`, plan]);
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

  ngOnInit() {
    window.scroll(0, 0);
    this.titleService.setTitle(`Pricing For Websites and Apps | Atlanta Mobile Web Design`);
    this.meta.updateTag({ name: 'description', content: `View all mobile web design and app pricing plans. Select from monthly or annual plans with 100% money back guaranteed!`});
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
