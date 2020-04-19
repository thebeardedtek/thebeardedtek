import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {

public base: any;
public apis: any;

  constructor() { }

  ngOnInit() {
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
  }

}
