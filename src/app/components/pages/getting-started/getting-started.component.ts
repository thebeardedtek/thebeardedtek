import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { LocalStorageService } from './../../../services/storage/local-storage.service';
import { RouterEvent, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LoginService } from './../../../services/login/login.service';
import * as moment from 'moment';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class GettingStartedComponent implements OnInit {
  public base: any;
  public apis: any;
  public user: any;
  public currentUser: any;
  public isLoggedIn: Boolean;
  public readMoreIDE: Boolean;
  public readMoreBrowser: Boolean;
  public readMoreTools: Boolean;

  constructor(private local: LocalStorageService, private router: Router, private login: LoginService, private titleService: Title, private meta: Meta) { }


  toggleIDE(){
    this.readMoreIDE = !this.readMoreIDE;
  }

  toggleBrowser(){
    this.readMoreBrowser = !this.readMoreBrowser;
  }

  toggleTools(){
    this.readMoreTools = !this.readMoreTools;
  }

 getCurrentUser() {
    if (this.login.tokenIsValid()) {
      this.login.refreshUser().subscribe((response) => {
        if(response){
          this.currentUser = response[0];
          this.isLoggedIn = true;
        } else {
          console.log('No User Exists');
        }
    });
    } else {
      console.log('No User Exists');
    }
  }

  ngOnInit() {
    window.scroll(0, 0);
    this.titleService.setTitle(`Get Started Building Your Project | Atlanta Mobile Web Design`);
    this.meta.updateTag({ name: 'description', content: `Start building your website or mobile app project today`});
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
    this.readMoreIDE = false;
    this.readMoreBrowser = false;
    this.readMoreTools = false;
    if(this.login.tokenIsValid()){
      this.getCurrentUser();
    }

  }

}
