import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  public base: any;
  public apis: any;

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.titleService.setTitle(`View Terms and Conditions | Atlanta Mobile Web Design`);
    this.meta.updateTag({ name: 'description', content: 'View all terms and conditions for using thebeardedtek website.'});
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
  }
}
