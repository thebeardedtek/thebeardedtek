import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { environment } from './../../../../environments/environment';
import { ContactWidgetService } from './contact-widget.service';
import { CommonService } from './../../../services/common/common.service';
import * as moment from 'moment';
import { HistoryService } from './../../../services/history/history.service';

@Component({
  selector: 'app-contact-widget',
  templateUrl: './contact-widget.component.html',
  styleUrls: ['./contact-widget.component.css']
})
export class ContactWidgetComponent implements OnInit {

  formIsProcessing: boolean;
  formIsComplete: boolean;
  public base: any;
  public apis: any;

  contactForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    countryCode : new FormControl(''),
    areaCode : new FormControl(''),
    number : new FormControl(''),
    extension : new FormControl(''),
    message : new FormControl(''),
  });

  constructor(public contact: ContactWidgetService, public common: CommonService, public history: HistoryService) {
    // this.client = client;
  }

  isValid() {
    let valid;
    // tslint:disable-next-line: max-line-length
    valid = () => this.contactForm.value['name'] && this.contactForm.value['email'] && this.common.isValidName(this.contactForm.value['name']);
    if (valid()) {valid = true; } else {valid = false; }return valid; }

  isString() {
    let valid;
    valid = this.common.isValidName(this.contactForm.value['name']);
    return valid;
  }

  isEmail() {
    let valid;
    valid = this.common.isValidEmailAddress(this.contactForm.value['email']);
    return valid;
  }

  isNumber(){
    let valid;
    valid = this.common.isValidNumber(this.contactForm.value['phone']);
    return valid;
  }

  processContactForm() {
    this.history.sendHistory(`CONTACT_FORM`).subscribe((response) => null);
    this.formIsProcessing = true;
    this.formIsComplete = false;
    this.postContactForm();
  }

  postContactForm() {
    const payload = this.contactForm.value;
    payload['name'] = this.common.stripTagsOnly(payload['name']);
    payload['email'] = this.common.stripTagsOnly(payload['email']);
    payload['number'] = payload['number'] ? this.common.stripTagsOnly(payload['number']) : null;
    payload['message'] = payload['message'] ? this.common.stripTagsOnly(payload['message']) : null ;
    payload.createdDate = moment.now();
    payload.currentUrl = window.location.href;
    payload.userAgent = window.navigator.userAgent;
    payload.appName = window.navigator.appName;


    this.contact.postContactForm(payload).subscribe((response) => {
      return null;
    });
    this.formIsComplete = true;
    this.formIsProcessing = false;
  }

  resetFormView() {
    this.formIsComplete = false;
    this.formIsProcessing = false;
    this.contactForm.markAsPristine();
    this.contactForm.reset();
  }

  ngOnInit() {
    this.formIsComplete = false;
    this.formIsProcessing = false;
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
  }

}
