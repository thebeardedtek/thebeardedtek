import { CommonService } from './../../../../../services/common/common.service';
import { Input, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './../../../../../services/login/login.service';
import { StripeService } from './../../../../../services/stripe/stripe.service';
import { LocalStorageService } from './../../../../../services/storage/local-storage.service';
import { environment } from './../../../../../../environments/environment';
import * as moment from 'moment';
import { ClientsService } from './../../../../../services/clients/clients.service';
import { format } from 'url';

@Component({
  selector: 'app-client-billing',
  templateUrl: './client-billing.component.html',
  styleUrls: ['./client-billing.component.css']
})

export class ClientBillingComponent implements OnInit {

  public doneRefreshingUser: Boolean;
  public clientBilling: any;
  public currentUser: any;
  public base: any;
  public apis: any;
  public isLoggedIn: Boolean;
  public emailError: Boolean;
  public doneProcessingForm: boolean;
  public clientInvoices: any[];

  clientBillingForm = new FormGroup({
    billingStreetNumber: new FormControl(''),
    billingStreetName: new FormControl(''),
    billingStreetUnit: new FormControl(''),
    billingCity: new FormControl(''),
    billingState: new FormControl(''),
    billingZip: new FormControl(''),
    billingPhone: new FormControl(''),

    shippingStreetNumber: new FormControl(''),
    shippingStreetName: new FormControl(''),
    shippingStreetUnit: new FormControl(''),
    shippingCity: new FormControl(''),
    shippingState: new FormControl(''),
    shippingZip: new FormControl(''),
    shippingPhone: new FormControl(''),




  // clientPrefix: new FormControl(''),
  // clientFirstName: new FormControl(''),
  // clientMiddleName: new FormControl(''),
  // clientLastName: new FormControl(''),
  // clientSuffix: new FormControl(''),
  // clientEmail: new FormControl(''),
  // clientAvatar: new FormControl(''),
  // clientBio: new FormControl(''),
  // clientPhone1: new FormControl(''),
  // clientPhone2: new FormControl(''),
  // enableFacebook: new FormControl(''),
  // facebookHandle: new FormControl(''),
  // twitterHandle: new FormControl(''),
  // enableTwitter: new FormControl(''),
  // instagramHandle: new FormControl(''),
  // enableInstagram: new FormControl(''),
  // linkedinHandle: new FormControl(''),
  // enableLinkedin: new FormControl(''),
  // enableGithub: new FormControl(''),
  // githubHandle: new FormControl(''),
  // enableGoogle: new FormControl(''),
  // googleHandle: new FormControl(''),
  // enablePinterest: new FormControl(''),
  // pinterestHandle: new FormControl(''),
  // enableSnapchat: new FormControl(''),
  // snapchatHandle: new FormControl(''),
  });

// tslint:disable-next-line: max-line-length
constructor(private login: LoginService,  private local: LocalStorageService, public clients: ClientsService, public common: CommonService, public stripe: StripeService) { }

  getCurrentUser() {
    this.doneRefreshingUser = false;
    this.doneProcessingForm = false;
    this.emailError = false;

    setTimeout(()=>{
      if (this.login.tokenIsValid()) {
      this.login.refreshUser().subscribe((response) => {
        if (response) {
          this.currentUser = response[0];
          this.clientBilling.payload = this.currentUser;
          this.isLoggedIn = true;
          this.doneRefreshingUser = true;
          this.doneProcessingForm = true;
          this.getStripeCustomer(this.currentUser);
        } else {
          //
          this.doneRefreshingUser = true;
          this.doneProcessingForm = true;
        }
    });
    } else {
      //
    }
    }, 750);
    this.doneRefreshingUser = true;
    this.doneProcessingForm = true;
  }

  resetForm() {
    this.clientBilling = {};
    this.clientBilling.payload = {};
    this.clientBillingForm.markAsPristine();
    this.getCurrentUser();
  }

  getStripeCustomer(currentUser){
    this.stripe.getStripeCustomer(currentUser).subscribe((response:any)=>{
      console.log(response);
      currentUser.stripe = response.data;
    });
  }


  ngOnInit() {
    this.clientBilling = {};
    this.clientBilling.payload = {};
    this.clientInvoices = [];
    this.clientBillingForm.markAsPristine();
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
    this.isLoggedIn = false;
    this.currentUser = this.login.currentUser ? this.login.currentUser : null;
    this.doneRefreshingUser = null;
    this.doneProcessingForm = true;
    this.getCurrentUser();
  }

}
