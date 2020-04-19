import { Component, OnInit, isDevMode } from '@angular/core';
import * as $ from 'jquery';
import { environment } from './../environments/environment.prod';
import {Router, NavigationEnd} from '@angular/router';
import { HistoryService } from './services/history/history.service';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  public env: any;
  public isSignedIn: Boolean;

// tslint:disable-next-line: no-shadowed-variable
  constructor(public router: Router, public history: HistoryService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) { gtag('config', 'UA-121121855-1', {'page_path': event.urlAfterRedirects}); }}); }

  navMeta: any;

  onActivate(event) {

  }

  getUserMetaData() {
    const nav = window.navigator;
    this.navMeta = {};

    this.navMeta.appCodeName = nav.appCodeName;
    this.navMeta.appName = nav.appName;
    this.navMeta.appVersion = nav.appVersion;
    this.navMeta.userAgent = nav.userAgent;
    this.navMeta.vendor = nav.vendor;
    this.navMeta.appCodeName = nav.appCodeName;
  }

  sendHistoryPayload(){
    try{
      this.history.sendHistory('ACCESSED_SITE').subscribe((response)=>{
        return null;
      });
    } catch(err){
      return err;
    }
  }

  ngOnInit() {
    this.env = environment.restAPI.baseURL;
    this.isSignedIn = false;
    this.getUserMetaData();
    this.sendHistoryPayload();
  }
}

