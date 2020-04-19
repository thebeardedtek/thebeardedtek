import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-security-cta',
  templateUrl: './security-cta.component.html',
  styleUrls: ['./security-cta.component.css']
})
export class SecurityCtaComponent implements OnInit {
  public base: any;
  public apis: any;

  constructor() { }

  ngOnInit() {
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
  }

}
