import { Router } from '@angular/router';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './../../../../../services/login/login.service';
import { LocalStorageService } from './../../../../../services/storage/local-storage.service';
import { environment } from './../../../../../../environments/environment';
import * as moment from 'moment';
import { ClientsService } from './../../../../../services/clients/clients.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DocumentsService } from './../../../../../services/documents/documents.service';
import { Observable } from 'rxjs';
import { CommonService } from '../../../../../services/common/common.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css'],
})

export class ClientProfileComponent implements OnInit {

  @Input() parentUser: any;

  public doneRefreshingUser: Boolean;
  public clientProfile: any;
  public currentUser: any;
  public base: any;
  public apis: any;
  public isLoggedIn: any;
  public userHasSession: any;
  public disableFacebook: Boolean;
  public emailError: Boolean;
  public selectedFile: File;
  public currentDoc: any;
  public imgUpload: any;
  public saveUser: any;
  public mimeTypes: any;
  public originalAvatar: any;

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
  uploadAvatar:  new FormControl(''),
  });

// tslint:disable-next-line: max-line-length
constructor(private login: LoginService,  private local: LocalStorageService, public clients: ClientsService, private http: HttpClient, private docs: DocumentsService, private router: Router, public common: CommonService) { }

  onFileSelected(event) {
    this.currentDoc = {
      lastModified: moment(event.target.files[0].lastModified).format(),
      name: event.target.files[0].name,
      size: event.target.files[0].size,
      type: event.target.files[0].type,
      document: event.target.files[0],
    };
    this.selectedFile = event.target.files[0];

  }

  openFileUploader(){
    $('#upload-profile-pic').click();
  }


  onUpload(payload) {
    // console.log('payload from onUpload', payload);

    if (payload.clientAvatar) {
      payload.clientAvatar = null;
    }
    // console.log('payload.clientAvatar', payload.clientAvatar);

    const profilepic = new FormData();
    profilepic.append('profilepic', this.selectedFile, this.selectedFile.name);
     this.imgUpload = this.http.post(`/api/documents`, profilepic).subscribe((response: any) => {
       if (response.status === 200) {
        //  console.log('response', response);
         payload.profileDocReference = response.data.docReference;
         payload.clientAvatar = response.data.docReference;
        //  console.log('payload', payload);

          // tslint:disable-next-line: no-shadowed-variable
          this.saveUser = this.clients.saveUserDetails(payload).subscribe((user: any) => {
          if (user.authorization === 'INVALID') {this.emailError = true; } else {
          localStorage.setItem('user', user.client.clientEmail);
          this.emailError = false;
          this.resetForm(); this.resetDoc(); this.refreshPage(); }});

       } else {
         throw new Error('Not able to process document');
       }
     });
  }

  selectAvatar(clientAvatar){
    // this.clientProfile.payload.clientAvatar = clientAvatar;
    // console.log('this.clientProfile.payload.clientAvatar,', this.clientProfile.payload.clientAvatar);
  }


  saveClientProfileForm() {
    this.emailError = false;

    if (this.selectedFile) {
      const timestamp = Date.now();
      const payload = this.clientProfile.payload;
      // console.log('payload', payload);
      this.onUpload(payload);

      setTimeout(() => {
        window.location.reload();
      }, 1500);
      // window.location.reload();

    } else {
      const payload = this.clientProfile.payload;
      this.saveUser = this.clients.saveUserDetails(payload).subscribe((response: any) => {
      if (response.authorization === 'INVALID') {this.emailError = true;
      } else {
          localStorage.setItem('user', response.client.clientEmail);
          this.emailError = false;
          this.resetForm(); this.resetDoc(); }}); }
  }

  getAvatar(currentUser) {
    // console.log('currentUser', currentUser);
    const timestamp = new Date().getTime();
    if (currentUser.clientAvatar) {
      if(this.originalAvatar){
        currentUser.clientAvatar = this.originalAvatar;

      }

      currentUser.clientAvatar = `./../../../../../../assets/documents/profiles/${currentUser.clientAvatar}?${timestamp}`;
    }

    this.clientProfile.payload.clientAvatar = currentUser.clientAvatar;

    // console.log('clientProfile.payload.clientAvatar', this.clientProfile.payload.clientAvatar);
    return currentUser.clientAvatar;
  }



  resetForm() {
    this.emailError = false;
    this.clientProfile = {};
    this.clientProfile.payload = {};
    this.clientProfileForm.markAsPristine();
  }

  resetDoc() {
    this.selectedFile = null;
    this.currentDoc = null;
  }

  refreshPage() {
    // this.common.refreshPage();
  }

  getMimeTypes() {
    this.mimeTypes = [];
    this.docs.getMimeTypes().subscribe((response: any) => {
      this.mimeTypes = response.data;
    });
  }

  ngOnInit() {
    this.clientProfile = {};
    this.clientProfile.payload = {};
    this.clientProfileForm.markAsPristine();
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
    this.isLoggedIn = this.login.isLoggedInFn();
    this.userHasSession = this.login.userHasSessionFn();
    this.currentUser = this.login.currentUser ? this.login.currentUser : null;
    this.emailError = false;
    this.originalAvatar = null;
    this.mimeTypes = [];
    this.resetDoc();
    this.doneRefreshingUser = null;
    this.currentDoc = {};
    this.getMimeTypes();
    // this.getCurrentUser();
    // this.toggleFacebook();
  }

  ngAfterViewInit(){
    this.parentUser = this.currentUser;
    console.log('from client profile', this.parentUser);
  }



  ngOnDestroy() {
    if (this.imgUpload) {
      this.imgUpload.unsubscribe();
    }

    if (this.saveUser) {
      this.saveUser.unsubscribe();
    }
  }

}
