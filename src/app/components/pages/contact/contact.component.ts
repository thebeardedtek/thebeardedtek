import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public base: any;
  public apis: any;

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.titleService.setTitle(`Contact Us | Atlanta Mobile Web Design`);
    this.meta.updateTag({ name: 'description', content: `Submit a message to inquire about service details, courses enrollment, and other information.`});
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
  }

}
