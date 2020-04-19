import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { FormGroup, FormControl } from '@angular/forms';
import { PortfolioPageService } from './portfolio-page.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css'],
  providers: [PortfolioPageService]
})
export class PortfolioPageComponent implements OnInit {
  public portfolioTypes: any[];
  public currentPortfolioView: any;
  public base: any;
  public apis: any;
  public webappTypes: any[];
  public recentItems: any[];
  public portfolioItems: any[];
  public portfolioOriginal: any[];
  public portfolioTotalCount: Number;
  public resultstart: Number;
  public resultrows: Number;
  public currentpage: Number;
  public activeCategory: any;

  public portfolioFilter = new FormGroup({
    query: new FormControl(), // general query
    type: new FormControl(), // app, website, graphic
    format: new FormControl(), // wordpress, joomla, angular
    wordpress: new FormControl(), // wordpress, joomla, angular
    joomla: new FormControl(), // wordpress, joomla, angular
    drupal: new FormControl(), // wordpress, joomla, angular
    angular: new FormControl(), // wordpress, joomla, angular
    squarespace: new FormControl(), // wordpress, joomla, angular
    html5: new FormControl(), // wordpress, joomla, angular
    vue: new FormControl(), // wordpress, joomla, angular
    react: new FormControl(), // wordpress, joomla, angular
  });

  constructor(private http: HttpClient, public portfolioSvc: PortfolioPageService, private titleService: Title, private meta: Meta) {
  }

  searchPortfolio() {
    // console.log('clicked portfolio search');
    // console.log(this.portfolioFilter.value);
    // console.log('webappTypes', this.webappTypes);
  }

  portfolioView(requestedView) {
    requestedView = requestedView.toString();

    if (requestedView === 'web') {
      this.currentPortfolioView = null;
      this.currentPortfolioView = 'web';
    } else if (requestedView === 'branding') {
      this.currentPortfolioView = null;
      this.currentPortfolioView = 'branding';
    } else if (requestedView === 'graphic') {
      this.currentPortfolioView = null;
      this.currentPortfolioView = 'graphic';
    } else if (requestedView === 'app') {
      this.currentPortfolioView = null;
      this.currentPortfolioView = 'app';
    }
  }

  getAllPortfolioItems() {
    this.portfolioItems = [];
    const portfolios = this.http.get(this.base + this.apis.portfolio).subscribe((response: any[]) => {
      if (response) {
        this.portfolioItems = response;
        this.portfolioTotalCount = response.length;

        this.portfolioItems.forEach((item) => {
          item.stringTags = item.tags.join(',');
        });

        this.recentItems = this.portfolioItems.slice(0,6);
        this.portfolioOriginal = this.portfolioItems;
      } else {
        throw new Error('Not able to retrive Portfolio Data');
      }
    });
  }

  getPortfolioTypes() {
    const allPortfolioTypes = this.portfolioSvc.getAllPortfolioTypes().subscribe((response: any[]) => {
      this.portfolioTypes = response;
    });
    return this.portfolioTypes;
  }

  getWebappTypes() {
    const allWebappTypes = this.portfolioSvc.getAllWebapps().subscribe((response: any[]) => {
      this.webappTypes = response;
      this.webappTypes.sort((a, b) => {
        return a.sequence - b.sequence;
      });
      this.activeCategory = this.webappTypes[0].code;
    });
    return this.webappTypes;
  }

  resetPortfolioSearch() {
    this.portfolioFilter.value.query = null;
    this.portfolioFilter.value.type = null;
    this.portfolioFilter.reset();
  }

  filterByCategory(webapp) {
    this.activeCategory = webapp.code;
    this.portfolioItems = this.portfolioOriginal;

    if(webapp.name.toUpperCase() === 'ALL'){
      this.portfolioItems = this.portfolioOriginal;
    } else {
      this.portfolioItems = this.portfolioItems.filter((item)=>{
      return item.category.toUpperCase() === webapp.name.toUpperCase();
    });
    }

  }


  ngOnInit() {
    window.scroll(0, 0);
    this.titleService.setTitle(`Design Portfolio | Atlanta Mobile Web Design`);
    this.meta.updateTag({ name: 'description', content: `Browse the design portfolio and gain inspiration for your website or app project!`});
    this.currentPortfolioView = 'web';
    this.activeCategory = null;
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
    this.portfolioItems = [];
    this.portfolioTypes = [];
    this.webappTypes = [];
    this.resultstart = 0;
    this.resultrows = 16;
    this.currentpage = 1;
    this.getWebappTypes();
    this.getPortfolioTypes();
    this.getAllPortfolioItems();

  }




}
