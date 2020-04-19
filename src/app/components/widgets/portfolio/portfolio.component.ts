import { environment } from './../../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public base: any;
  public apis: any; 

  constructor(public appcomp:AppComponent) {

  }
  ngOnInit() {
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
}

  }
