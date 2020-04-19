import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-page-hero',
  templateUrl: './page-hero.component.html',
  styleUrls: ['./page-hero.component.css']
})
export class PageHeroComponent implements OnInit {
  heroImg: string;
  public base: any;
  public apis: any;

  constructor() { }

  ngOnInit() {
    this.heroImg = '';
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
  }

}
