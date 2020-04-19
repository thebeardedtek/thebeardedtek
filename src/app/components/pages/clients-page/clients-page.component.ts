import { Directive, ElementRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterService } from './../../../services/register/register.service';
import { CommonService } from '../../../services/common/common.service';
import { environment } from './../../../../environments/environment';
import { LoginService } from './../../../services/login/login.service';
import { LocalStorageService } from './../../../services/storage/local-storage.service';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DocumentsService } from '../../../services/documents/documents.service';
import * as moment from 'moment';
import { ClientsService } from './../../../services/clients/clients.service';
import { CoursesService } from './../../../services/courses/courses.service';
import { PricingService } from './../../../services/pricing/pricing.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css'],

})

export class ClientsPageComponent implements OnInit {
  public currentUser: ClientsModel.ClientsInterface;
  public parentUser: any;
  public clientPage: any;
  public projectStatus: any;
  public allCourses: any;
  public isLoggedIn: boolean;
  public loginType: any;
  public accountType: string;
  public registerUser: boolean;
  public clientsList: any[];
  public clientProjects: any;
  public clientBilling: any;
  public clientBillingCopy: any;
  public emailRegister: any;
  public passwordRegister: any;
  public emailLogIn: any;
  public passwordLogIn: any;
  public base: any;
  public apis: any;
  public doneProcessingForm: boolean;
  public userHasSession: any;
  public disableFacebook: Boolean;
  public emailError: Boolean;
  public selectedFile: File;
  public currentDoc: any;
  public imgUpload: any;
  public saveUser: any;
  public mimeTypes: any;
  public doneRefreshingUser: boolean;
  public editPayment: boolean;
  public pricingPlans: any;
  public activePlan: any;
  public activePeriod: any;
  public activePlanDisplayName: string;
  public last4: any;
  public line1: any;
  public line2: any;
  public city: any;
  public state: any;
  public postalCode: any;
  public invalidEmail: boolean;
  public emailInUse: boolean;
  public doneRefreshingBilling: boolean;
  public hasTempProfile: boolean;
  public tempFile: any;
  public profilePic: any;
  public clientAvatthis: any;
  public tempAvatar: any;
  public editAddress: boolean;
  public cancelAccount: boolean;

  clientProfileForm = new FormGroup({
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

  clientProjectsForm = new FormGroup({
    projectName: new FormControl(''),
    projectDesc: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    statusDesc: new FormControl(''),
    statusCode: new FormControl(''),
    clientEmail: new FormControl(''),
  });

  clientCoursesForm = new FormGroup({

  });

  clientAddressForm = new FormGroup({
    stripeFullName: new FormControl(),
    stripeNumber: new FormControl(),
    stripeCvc: new FormControl(),
    stripeExpDate: new FormControl(),
    stripeZip: new FormControl(),
    line1: new FormControl(),
    line2: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    postalCode: new FormControl(),
  });

  // tslint:disable-next-line: max-line-length
  constructor(private login: LoginService,  private titleService: Title, private meta: Meta, private docs: DocumentsService, public common: CommonService, public clients: ClientsService, public courses: CoursesService, public pricing: PricingService) {}

  openFileUploader(event) {
    // console.log('event', event);
    event.preventDefautlt();
  }

onFileSelected(event) {
  event.stopPropagation();
  event.preventDefault();
  this.tempFile = null;
  this.hasTempProfile = false;
  this.selectedFile = event.target.files[0];



  const reader = new FileReader();
  reader.readAsDataURL(this.selectedFile);
  reader.onloadend = () => {
    this.tempFile = reader.result;
    this.hasTempProfile = true;
    $('.avatar-overlay').css('display', 'flex');


  };


}

saveNewProfilePic() {
  const profilepic = new FormData();

  if (this.selectedFile) {
    profilepic.append('profilepic', this.selectedFile, this.selectedFile.name);
    this.docs.saveDocument(profilepic).subscribe((response: any) => {
      if (response) {
        this.tempAvatar = response.data;

        if (this.tempAvatar && this.currentUser) {
          this.currentUser.profileDocReference = this.tempAvatar.docReference;
          this.clients.saveUserDetails(this.currentUser).subscribe((response2) => {
            if (response2) {
              this.resetForm();
            } else {
              throw new Error('Not able to set data');
            }
          });
        }
      }
    });
  }
}




  // PROJECTS
  getProjectStatus(clientProjects) {
    this.clients.getProjectStatus().subscribe((response: any) => {
      this.projectStatus = response.data;
      this.projectStatus.sort((a, b) => {
        return a.statusId - b.statusId;
      });

      const currentStatus = this.projectStatus.find(item => {
        return item.statusId === clientProjects.statusId;
      });

      if (currentStatus) {
        clientProjects.statusId = currentStatus.statusId;
        clientProjects.statusDesc = currentStatus.statusDesc;
        clientProjects.statusCode = currentStatus.statusCode;
        clientProjects.icon = currentStatus.icon;
      }
    });
  }

  getClientProjects(currentUser) {
    this.clients.getClientProjects(currentUser).subscribe((response: any) => {
      this.clientProjects = response.data[0];
      this.getProjectStatus(this.clientProjects);
    });
  }

  getBackgroundColor(status, clientProjects) {
    let color;
    if (clientProjects.statusId && status.statusId === clientProjects.statusId) {
      color = 'green';
    }
    return color;
  }

  saveClientProject() {
    this.clients.saveClientProjects(this.clientProjects).subscribe((response: any) => {
      if (response) {
        this.getClientProjects(this.currentUser);
      } else {
        throw new Error('');
      }
    });
  }

  updateClientProject() {
    this.clients.updateClientProjects(this.clientProjects).subscribe((response: any) => {
      if (response) {
        this.getClientProjects(this.currentUser);
      } else {
        throw new Error('');
      }
    });
  }

  // PROJECTS
  checkLoginStatus() {
    return this.login.tokenIsValid();
  }

  isValidString() {
    // console.log(this.clientProfileForm.value['clientFirstName']);
    return this.common.isValidName(this.clientProfileForm.value['clientFirstName']);
  }

  saveClientPageForm() {
    this.emailError = false;
    this.doneProcessingForm = false;
    const payload = this.clientPage;
    const saveUser = this.clients.saveUserDetails(payload).subscribe((response: any) => {

      if (response.authorization === 'INVALID') {
          this.emailError = true;
          this.doneProcessingForm = true;
      } else {
          localStorage.setItem('user', response.client.clientEmail);
          this.emailError = false;
          this.resetForm();
      }
    });
  }

  resetForm() {
    this.doneProcessingForm = false;
    this.doneRefreshingBilling = false;
    this.emailError = false;
    this.clientPage = {};
    this.clientProfileForm.markAsPristine();
    this.clientProjectsForm.markAsPristine();
    this.clientCoursesForm.markAsPristine();
    this.getCurrentUser();

    setTimeout(() => {
      this.doneProcessingForm = true;
      this.doneRefreshingBilling = true;
    }, 1500);
  }

  resetAddressForm() {
    this.clientAddressForm.markAsPristine();
    this.getClientBilling(this.currentUser);
  }

  getAvatar(profileDocReference) {
    const timestamp = new Date().getTime();
      this.docs.getCurrentUserDoc(profileDocReference).subscribe((response: any) => {
        if (response) {
          this.currentUser.clientAvatar = response.data.filename + `?${moment().format('YYYYMMDDhhmmss')}`;
          console.log(this.currentUser.clientAvatar);
        } else {
          this.currentUser.clientAvatar = 'default-avatar.png';
        }
      });

      return this.currentUser.clientAvatar;

  }

  getCurrentUser() {
    this.doneRefreshingUser = false;
    this.doneProcessingForm = false;
    this.doneRefreshingBilling = false;
    this.hasTempProfile = false;
    this.tempFile = null;
    this.emailError = false;
    this.tempAvatar = null;


    setTimeout(() => {
      if (this.login.tokenIsValid()) {
      this.login.refreshUser().subscribe((response) => {
        if (response) {
          this.currentUser = response[0];
          this.getAvatar(this.currentUser.profileDocReference);
          if (this.currentUser) {
            this.getClientProjects(this.currentUser);
            this.getClientBilling(this.currentUser);
          }
          this.getAllCourses(this.currentUser);
          this.clientPage = this.currentUser;
          this.isLoggedIn = true;
          this.doneRefreshingUser = true;
          this.doneProcessingForm = true;
          this.doneRefreshingBilling = true;
        } else {
          //
          this.doneRefreshingUser = true;
          this.doneProcessingForm = true;
          this.doneRefreshingBilling = true;
        }
    });
    } else {
      //
    }
    }, 750);
  }

  // BILLING
  getClientBilling(currentUser) {
    this.clients.getClientBillling(currentUser).subscribe((response: any) => {
      if (response) {
        this.clientBilling = response.data;
        this.clientBillingCopy = response.data;
          this.last4 = this.clientBilling.paymentMethods.card.last4 || '';
          this.line1 = this.clientBilling.customer.address.line1 || '';
          this.line2 = this.clientBilling.customer.address.line2 || '';
          this.city = this.clientBilling.customer.address.city || '';
          this.state = this.clientBilling.customer.address.state || '';
          this.postalCode = this.clientBilling.customer.address.postal_code || '';
          this.clientAddressForm.controls['line1'].setValue(this.line1);
          this.clientAddressForm.controls['line2'].setValue(this.line2);
          this.clientAddressForm.controls['city'].setValue(this.city);
          this.clientAddressForm.controls['state'].setValue(this.state);
          this.clientAddressForm.controls['postalCode'].setValue(this.postalCode);
      } else {
        this.clientBilling = {};
      }
    });
  }

  replaceCard() {
    this.editPayment = !this.editPayment;
  }

  replaceAddress() {
    this.editAddress = !this.editAddress;
  }

  updateClientAddress() {
    this.doneRefreshingBilling = false;
    const payload = {
      stripeId: this.currentUser.stripeId,
      line1: this.clientAddressForm.controls['line1'].value,
      line2: this.clientAddressForm.controls['line2'].value,
      city: this.clientAddressForm.controls['city'].value,
      state: this.clientAddressForm.controls['state'].value,
      postalCode: this.clientAddressForm.controls['postalCode'].value,

      stripeFullName: this.clientAddressForm.controls['stripeFullName'].value,
      stripeNumber: this.clientAddressForm.controls['stripeNumber'].value,
      stripeExpDate: this.clientAddressForm.controls['stripeExpDate'].value,
      stripeCvc: this.clientAddressForm.controls['stripeCvc'].value,
      stripeZip: this.clientAddressForm.controls['stripeZip'].value,
      stripeExpMonth: moment(this.clientAddressForm.controls['stripeExpDate'].value).format('MM'),
      stripeExpYear: moment(this.clientAddressForm.controls['stripeExpDate'].value).format('YYYY'),
      paymentMethodId: this.clientBilling.paymentMethods.paymentMethodId,

      clientEmail: this.clientPage.clientEmail,
      clientPhone1: this.clientPage.clientPhone1,

    };
    console.log(this.clientBilling);
    // console.log('stripeExpYear', payload.stripeExpYear);

    this.clients.updateClientBilling(payload).subscribe((response: any) => {
      if (response.status === 200) {
        this.getClientBilling(this.currentUser);
        this.editPayment = false;
        this.editAddress = false;
        this.setClean();

        setTimeout(() => {
          this.doneRefreshingBilling = true;
        }, 1500);
      } else {
        this.doneRefreshingBilling = true;
      }
    });
  }

  // BILLING

  // VALIDATE FORM

  hasValidName() {
    // tslint:disable-next-line: max-line-length
    const stripeFullName = this.clientAddressForm.controls['stripeFullName'].value && this.clientAddressForm.controls['stripeFullName'].value !== '' ? this.clientAddressForm.controls['stripeFullName'].value : `${this.clientPage.clientFirstName} ${this.clientPage.clientMiddleName} ${this.clientPage.clientLastName}`;

    const valid = stripeFullName || null;
    return valid && valid !== null && valid !== '' && valid.length > 3 && this.common.isValidName(valid);
  }

  hasValidCVC() {
    // tslint:disable-next-line: max-line-length
    const stripeFullName = this.clientAddressForm.controls['stripeFullName'].value && this.clientAddressForm.controls['stripeFullName'].value !== '' ? this.clientAddressForm.controls['stripeFullName'].value : `${this.clientPage.clientFirstName} ${this.clientPage.clientMiddleName} ${this.clientPage.clientLastName}`;

    const valid = this.clientAddressForm.controls['stripeCvc'].value || null;
    return valid && valid !== null && valid !== '' && valid.length > 2 && valid.length < 5 && this.common.isValidCVC(valid);
  }

  hasValidUsZip() {
    // tslint:disable-next-line: max-line-length
    const stripeFullName = this.clientAddressForm.controls['stripeFullName'].value && this.clientAddressForm.controls['stripeFullName'].value !== '' ? this.clientAddressForm.controls['stripeFullName'].value : `${this.clientPage.clientFirstName} ${this.clientPage.clientMiddleName} ${this.clientPage.clientLastName}`;

    const valid = this.clientAddressForm.controls['stripeZip'].value || null;
    return valid && valid !== null && valid !== '' && valid.length < 11 && this.common.isValidUsZip(valid);
  }

  hasValidPayment() {
    const valid = () => {
      // tslint:disable-next-line: max-line-length
      return this.clientAddressForm.controls['stripeFullName'].value && this.clientAddressForm.controls['stripeCvc'].value && this.clientAddressForm.controls['stripeZip'].value && this.clientAddressForm.controls['stripeExpDate'].value && this.clientAddressForm.controls['stripeNumber'].value && this.hasValidCVC() && this.hasValidUsZip();

    };
    return valid();
  }

  setDirty(): void {
    this.clientAddressForm.markAsDirty();
  }

  setClean(): void {
    this.clientAddressForm.markAsPristine();
  }

  formIsValid(form) {
    return this.hasValidName();

    // return this.hasValidName() && this.hasValidPayment() && this.hasValidUsZip() && this.hasValidCVC();

  }

  hasValidAddress() {
    const line1 = this.clientAddressForm.controls['line1'].value && this.clientAddressForm.controls['line1'].value !== '';
    const city = this.clientAddressForm.controls['city'].value && this.clientAddressForm.controls['city'].value !== '';
    const state = this.clientAddressForm.controls['state'].value && this.clientAddressForm.controls['state'].value !== '';
    const postalCode = this.clientAddressForm.controls['postalCode'].value && this.clientAddressForm.controls['postalCode'].value !== '';
    // tslint:disable-next-line: max-line-length
    return line1 && city && this.common.isValidName(this.clientAddressForm.controls['city'].value) && state && this.common.isValidName(this.clientAddressForm.controls['state'].value) && this.common.isValidUsZip(Number(this.clientAddressForm.controls['postalCode'].value));
  }

  // COURSES
  getAllCourses(currentUser) {
    this.currentUser.clientCourses = [];
    this.courses.getAllCourses().subscribe((response: any) => {
      this.allCourses = response.data;
      this.allCourses.forEach((item) => {
        currentUser.courses.forEach((item2) => {
          if (item.courseId === item2.courseId && item2.isActive) {
            currentUser.clientCourses.push(item);
        }
        });

      });
    });
  }


removeCourse(course) {
  this.currentUser.courses.forEach((item) => {
    if (item.courseId === course.courseId) {
      item.isActive = false;
    }
  });
  this.courses.removeCourse(this.currentUser).subscribe((response: any) => {
    this.ngOnInit();
  });
}
  // COURSES


  getAllPlans() {
    this.pricing.getAllPricingPlans().subscribe((response: any) => {
      if (response) {
        this.pricingPlans = response[0];
        this.activePlanDisplayName = this.getDisplayName(this.activePlan, this.pricingPlans);
      } else {
        throw new Error('');
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
  }

  selectPeriod(period) {
    this.activePeriod = period || `monthly`;
  }

  cancelUserAccount() {
    this.cancelAccount = !this.cancelAccount;
  }

  confirmCancelAcct() {
    this.cancelUserAccount();
    this.currentUser.active = false;
    this.clients.saveUserDetails(this.currentUser).subscribe((response) => {
      if (response) {
        this.ngOnInit();
      }
    });
  }

  reactivateAccount(){
    this.currentUser.active = true;
    this.clients.saveUserDetails(this.currentUser).subscribe((response) => {
      if (response) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.titleService.setTitle(`Manage Your Profile | Atlanta Mobile Web Design`);
    this.meta.updateTag({ name: 'description', content: `Manage your profile, enroll in web design courses, and direct message support from this client management page`});
    $('.avatar-overlay').css('display', 'none');
    this.currentUser = this.clients.getCurrentUserFormat();
    this.loginType = this.login.loginType;
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
    this.accountType = 'CLIENT';
    this.registerUser = false;
    this.doneRefreshingUser = true;
    this.doneProcessingForm = true;
    this.doneRefreshingBilling = true;
    this.hasTempProfile = false;
    this.tempFile = null;
    this.clientPage = {};
    this.clientPage.clientAvatar =
    this.clientProjects = {};
    this.clientBilling = {};
    this.clientBillingCopy = {};
    this.projectStatus = [];
    this.allCourses = [];
    this.pricingPlans = [];
    this.editPayment = false;
    this.activePlan = null;
    this.editAddress = false;
    this.cancelAccount = false;
    this.activePeriod = 'monthly';
    this.getAllPlans();
    this.getCurrentUser();


  }
}
