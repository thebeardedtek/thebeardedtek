import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {
  public base: any;
  public apis: any;

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.titleService.setTitle(`Marketing Your Website | Atlanta Mobile Web Design`);
    this.meta.updateTag({ name: 'description', content: `Build a strategic digital campaign that effectively converts your target audience.`});
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
  }

}
