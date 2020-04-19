import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  public base: any;
  public apis: any;

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.titleService.setTitle(`Maintenance For Websites | Atlanta Mobile Web Design`);
    this.meta.updateTag({ name: 'description', content: `View all available maintenance plans for your website or app. Stay up-to-date with industry practices and security patches.`});
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
  }

}
