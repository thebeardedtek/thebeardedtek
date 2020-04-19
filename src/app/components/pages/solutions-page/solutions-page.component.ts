import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { environment } from './../../../../environments/environment';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-solutions-page',
  templateUrl: './solutions-page.component.html',
  styleUrls: ['./solutions-page.component.css']
})
export class SolutionsPageComponent implements OnInit {
  showMobileMenu:boolean;
  public base: any;
  public apis: any;

  constructor(public appcomp: AppComponent, private titleService: Title, private meta: Meta) {
  }

  // toggleForm(){
  //   this.showMobileMenu = false;
  //   this.appcomp.toggleForm();
  // }




  ngOnInit() {
    window.scroll(0, 0);
    this.titleService.setTitle(`All Solutions | Atlanta Mobile Web Design`);
    this.meta.updateTag({ name: 'description', content: `View all available solutions for building your new website or app`});
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
  }

}
