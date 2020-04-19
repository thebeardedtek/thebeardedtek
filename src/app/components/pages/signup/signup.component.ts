import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
import { Moment } from 'moment';
import { PricingService } from '../../../services/pricing/pricing.service';
import { CommonService } from '../../../services/common/common.service';
// import {default as _rollupMoment, Moment} from 'moment';
import { environment } from './../../../../environments/environment';
import { LoginService } from './../../../services/login/login.service';
import { Title, Meta } from '@angular/platform-browser';

const moment =  _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})


export class SignupComponent implements OnInit {
  public plan: any;
  public activePlan: any;
  public activePeriod: any;
  public pricingPlans: any;
  public activePlanDisplayName: string;
  public paymentPayload: any = {};
  public doneProcessingForm: boolean;
  public emailInUse: boolean;
  public registrationSuccess: boolean;
  public invalidEmail: any;

planForm = new FormGroup({
  plan: new FormControl(),
  stripePeriod: new FormControl(),
  firstName: new FormControl(),
  lastName: new FormControl(),
  product: new FormControl(),
  phone: new FormControl(),
  email: new FormControl(),
  company: new FormControl(),
  currentWebsite: new FormControl(),
  startDate: new FormControl(),
  endDate: new FormControl(),
  budget: new FormControl(),
  clientEmail: new FormControl(),
  clientPassword: new FormControl(),
  stripeNumber: new FormControl(),
  stripeExpMonth: new FormControl(),
  stripeExpYear: new FormControl(),
  stripeCvc: new FormControl(),
  stripeFullName: new FormControl(),
  stripeExpDate: new FormControl(),
  stripeZip: new FormControl(),

});
 

  constructor( private route: ActivatedRoute, private router: Router, private pricingSvc: PricingService, public common: CommonService, public login: LoginService, private titleService: Title, private meta: Meta) { }

  date = new FormControl(moment());



  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }


  getPlanParam() {
    this.activePlan = null;
    this.plan = this.route.paramMap.subscribe((item: any) => {
      if (item) {
        this.activePlan = item.params.plan || `core`;
        this.activePlan = item.params.plan || `core`;


        console.log('this.activePlan', this.activePlan);

        this.planForm.value['plan'] = this.activePlan;
        console.log('plan', this.planForm.value['plan']);
      } else {
        this.activePlan = null;
      }
    });
    return this.activePlan;
  }

getPricingPlans() {
    this.pricingSvc.getAllPricingPlans().subscribe((response: any) => {
      if (response) {
        this.pricingPlans = response[0];
        this.activePlanDisplayName = this.getDisplayName(this.activePlan, this.pricingPlans);
      }
    });
  }



  getDisplayName(activePlan, pricingPlans) {
    switch (activePlan) {
      case `core`: return pricingPlans.core.displayName;
      break;
      case `plus`: return pricingPlans.plus.displayName;
      break;
      case `marketing`: return pricingPlans.marketing.displayName;
      break;
      case `app`: return pricingPlans.app.displayName;
      break;
      case `trial`: return pricingPlans.trial.displayName;
      break;
      default: return `Trial`;
    }
  }

  selectNewPlan(plan) {
    this.activePlan = plan || `core`;
    console.log('this.activePlan', this.activePlan);
  }

  selectPeriod(period) {
    this.activePeriod = period || `monthly`;
  }

  processPlanPayment(activePlan, planFormValue, activePeriod) {
    this.doneProcessingForm = false;
    let tempPlan;
    let tempPeriod;

    if (planFormValue && planFormValue !== null && planFormValue !== '') {
      tempPlan = planFormValue;
    } else {
      tempPlan = activePlan;
    }

    if (activePeriod && activePeriod !== null && activePeriod !== '') {
      tempPeriod = activePeriod;
    } else {
      tempPeriod = 'monthly';
    }

    this.paymentPayload.plan = this.planForm.controls['plan'].value || tempPlan;
    this.paymentPayload.stripePeriod = this.planForm.controls['stripePeriod'].value || tempPeriod;
    this.paymentPayload.stripeFullName = this.planForm.controls['stripeFullName'].value;
    this.paymentPayload.clientEmail = this.planForm.controls['email'].value;
    this.paymentPayload.email = this.planForm.controls['email'].value;
    this.paymentPayload.currentWebsite = this.planForm.controls['currentWebsite'].value;
    this.paymentPayload.clientPassword = this.planForm.controls['clientPassword'].value;
    this.paymentPayload.stripeNumber = this.planForm.controls['stripeNumber'].value;
    this.paymentPayload.stripeCvc = this.planForm.controls['stripeCvc'].value;
    this.paymentPayload.stripeZip = this.planForm.controls['stripeZip'].value;
    this.paymentPayload.stripeExpDate = moment(this.planForm.controls['stripeExpDate'].value).format();
    this.paymentPayload.stripeExpMonth = moment(this.planForm.controls['stripeExpDate'].value).format('MM');
    this.paymentPayload.stripeExpYear = moment(this.planForm.controls['stripeExpDate'].value).format('YYYY');
// 4242424242424242
// 03/2021
// 314
    setTimeout(()=>{
      this.login.processRegistrationForm(this.paymentPayload, 'CLIENT').subscribe((response: any) => {
      if (response) {
        if (response.authorization === `INVALID`) {
          this.invalidEmail = this.paymentPayload.email;
          this.emailInUse = true;
        } else {
          this.registrationSuccess = true;
        }
        this.doneProcessingForm = true;
      }
    });
    }, 2000);
  }

  // VALIDATE FORM
  hasValidEmail() {
    const valid = this.planForm.controls['email'].value;
    if(this.invalidEmail === valid){
      this.emailInUse = true;
      return false;
    } else {
      this.emailInUse = false;
      return valid && valid !== null && valid !== '' && valid.length <= 30 && this.common.isValidEmailAddress(valid);
    }
  }

  hasValidPassword() {
    const valid = this.planForm.controls['clientPassword'].value;
    return valid && valid.length > 7 && valid.length < 21;
  }

  hasValidURL() {
    let valid = this.planForm.controls['currentWebsite'].value;
    if (valid === '' || valid === null) {
      valid = true;
    } else {
      return this.common.isValidURL(valid);
    }
    return valid;
  }

  hasValidName() {
    const valid = this.planForm.controls['stripeFullName'].value;
    return valid && valid !== null && valid !== '' && valid.length > 3 && this.common.isValidName(valid);
  }

  hasValidCVC(){
    const valid = this.planForm.controls['stripeCvc'].value;
    return valid && valid !== null && valid !== '' && valid.length > 2 && valid.length < 5 && this.common.isValidCVC(valid);
  }

  hasValidUsZip(){
    const valid = this.planForm.controls['stripeZip'].value;
    return valid && valid !== null && valid !== '' && valid.length < 11 && this.common.isValidUsZip(valid);
  }

  hasValidPayment() {
    const valid = () => {
      return this.planForm.controls['stripeCvc'].value && this.planForm.controls['stripeZip'].value && this.planForm.controls['stripeExpDate'].value && this.planForm.controls['stripeNumber'].value && this.hasValidCVC() && this.hasValidUsZip();
    };
    return valid();
  }

  setDirty(): void {
    this.planForm.markAsDirty();
  }

  setClean(): void {
    this.planForm.markAsPristine();
  }

  formIsValid() {
    return this.hasValidEmail() && this.hasValidPassword() && this.hasValidURL() && this.hasValidName() && this.hasValidPayment() && this.hasValidUsZip() && this.hasValidCVC();
  }

  ngOnInit() {

    if(this.login.tokenIsValid()){
      this.router.navigate(['/clients']);
    } else {
      this.plan = null;
      this.activePlan = null;
      this.invalidEmail = null;
      this.doneProcessingForm = true;
      this.emailInUse = false;
      this.registrationSuccess = false;
      this.activePeriod = 'monthly';
      this.pricingPlans = [];
      this.titleService.setTitle(`Become a Client Today! | Atlanta Mobile Web Design`);
      this.meta.updateTag({ name: 'description', content: `You need a digital presence on the web. Create a visually stunning design that is sure to attract clients.`});

      this.getPlanParam();
      this.getPricingPlans();
    }

    
  }

}
