import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-mobile-apps-page',
  templateUrl: './mobile-apps-page.component.html',
  styleUrls: ['./mobile-apps-page.component.css']
})
export class MobileAppsPageComponent implements OnInit {
  public base: any;
  public apis: any;

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.titleService.setTitle(`Mobile Apps | Atlanta Mobile Web Design`);
    this.meta.updateTag({ name: 'description', content: `Start bulding your iOS or Android mobile app on the platform of your choice.`});
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
  }

}
