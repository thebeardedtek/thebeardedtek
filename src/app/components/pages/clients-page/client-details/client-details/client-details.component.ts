import { CommonService } from './../../../../../services/common/common.service';
import { Input, Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './../../../../../services/login/login.service';
import { LocalStorageService } from './../../../../../services/storage/local-storage.service';
import { environment } from './../../../../../../environments/environment';
import * as moment from 'moment';
import { ClientsService } from './../../../../../services/clients/clients.service';
import { format } from 'url';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css'],

})
export class ClientDetailsComponent implements OnInit {

  @Input() user: any;

  public doneRefreshingUser: Boolean;
  public clientDetails: any;
  public currentUser: any;
  public base: any;
  public apis: any;
  public isLoggedIn: Boolean;
  public disableFacebook: Boolean;
  public emailError: Boolean;
  public doneProcessingForm: boolean;

  clientDetailsForm = new FormGroup({
  clientPrefix: new FormControl(''),
  clientFirstName: new FormControl(''),
  clientMiddleName: new FormControl(''),
  clientLastName: new FormControl(''),
  clientSuffix: new FormControl(''),
  clientEmail: new FormControl(''),
  clientAvatar: new FormControl(''),
  clientBio: new FormControl(''),
  clientPhone1: new FormControl(''),
  clientPhone2: new FormControl(''),
  enableFacebook: new FormControl(''),
  facebookHandle: new FormControl(''),
  twitterHandle: new FormControl(''),
  enableTwitter: new FormControl(''),
  instagramHandle: new FormControl(''),
  enableInstagram: new FormControl(''),
  linkedinHandle: new FormControl(''),
  enableLinkedin: new FormControl(''),
  enableGithub: new FormControl(''),
  githubHandle: new FormControl(''),
  enableGoogle: new FormControl(''),
  googleHandle: new FormControl(''),
  enablePinterest: new FormControl(''),
  pinterestHandle: new FormControl(''),
  enableSnapchat: new FormControl(''),
  snapchatHandle: new FormControl(''),
  });

// tslint:disable-next-line: max-line-length
constructor(private login: LoginService,  private local: LocalStorageService, public clients: ClientsService, public common: CommonService) { }

  isValidString(){
    // console.log(this.clientDetailsForm.value['clientFirstName']);
    return this.common.isValidName(this.clientDetailsForm.value['clientFirstName']);
  }

  saveClientDetailsForm() {
    this.emailError = false;
    this.doneProcessingForm = false;
    const payload = this.clientDetails.payload;
    const saveUser = this.clients.saveUserDetails(payload).subscribe((response: any) => {

      if(response.authorization === 'INVALID'){
          this.emailError = true;
      } else {
          localStorage.setItem('user', response.client.clientEmail);
          this.emailError = false;
          this.resetForm();
      }
    });
    this.doneProcessingForm = true;
  }

  getCurrentUser() {
    this.doneRefreshingUser = false;
    this.doneProcessingForm = false;
    this.emailError = false;

    setTimeout(()=>{
      if (this.login.tokenIsValid()) {
      this.login.refreshUser().subscribe((response) => {
        if (response) {
          this.currentUser = response[0];
          // console.log('this.currentUser', this.currentUser);
          this.clientDetails.payload = this.currentUser;
          this.isLoggedIn = true;
          this.doneRefreshingUser = true;
          this.doneProcessingForm = true;
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

  getStripeCustomer(){
    // this.currentUser

  }

  resetForm() {
    this.emailError = false;
    this.clientDetails = {};
    this.clientDetails.payload = {};
    this.clientDetailsForm.markAsPristine();
  }


  ngOnInit() {
    // this.clientDetails = {};
    // this.clientDetails.payload = {};
    this.clientDetailsForm.markAsPristine();
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
    this.isLoggedIn = false;
    this.currentUser = this.login.currentUser ? this.login.currentUser : null;
    this.emailError = false;
    this.doneRefreshingUser = null;
    this.doneProcessingForm = true;
    // this.getCurrentUser();
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    setTimeout(() => {
      console.log('from client details ', this.user);
      this.clientDetails = {};
      this.clientDetails.payload = {};
      this.clientDetails.payload = this.user;
      console.log('this.clientDetails.payload', this.clientDetails.payload);
    }, 2000);
  }

}
