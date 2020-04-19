import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PricingService } from '../../../../services/pricing/pricing.service';

@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.css']
})
export class PricingTableComponent implements OnInit {

  constructor(public router: Router, public pricing: PricingService) { }

  public pricingPlans: any;

  selectPlan(plan){
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
    this.pricingPlans = {};
    this.pricingPlans.core = {};
    this.pricingPlans.plus = {};
    this.pricingPlans.marketing = {};
    this.pricingPlans.app = {};
    this.getPricingPlans();
  }

}
