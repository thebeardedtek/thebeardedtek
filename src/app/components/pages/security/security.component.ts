import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { environment } from './../../../../environments/environment';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  public base: any;
  public apis: any;

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.titleService.setTitle(`Secure Your Website | Atlanta Mobile Web Design`);
    this.meta.updateTag({ name: 'description', content: `Protect your website or app with modern, proven security web practices`});
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
  }

}
