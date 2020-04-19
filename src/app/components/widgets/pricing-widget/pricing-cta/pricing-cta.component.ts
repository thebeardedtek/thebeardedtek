import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-cta',
  templateUrl: './pricing-cta.component.html',
  styleUrls: ['./pricing-cta.component.css']
})
export class PricingCtaComponent implements OnInit {

  constructor(public router: Router) { }

  selectPlan(plan){
    this.router.navigate([`/signup`, plan]);
  }

  ngOnInit() {
  }

}
