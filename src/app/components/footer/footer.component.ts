import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  showForm:any;
  public base: any;
  public apis: any;

  constructor(public appcomp:AppComponent) {
    // this.showForm = function(){
    //   return appcomp.toggleForm();
    // };
  }

  // toggleForm(){
  //   return this.showForm();
  // }

  ngOnInit() {
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
  }

}
