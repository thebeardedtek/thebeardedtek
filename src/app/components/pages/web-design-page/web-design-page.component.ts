import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-web-design-page',
  templateUrl: './web-design-page.component.html',
  styleUrls: ['./web-design-page.component.css']
})
export class WebDesignPageComponent implements OnInit {
  public base: any;
  public apis: any;
  public imgWidth: number;
  public imgHeight: any;

  constructor(private titleService: Title, private meta: Meta) { }

  getImgDimensions() {

    const innerWidth = window.innerWidth / 10;

    this.imgWidth = innerWidth;
    return {'width.px': this.imgWidth};
  }

  ngOnInit() {
    window.scroll(0, 0);
    this.titleService.setTitle(`Build a Website Today | Atlanta Mobile Web Design`);
    this.meta.updateTag({ name: 'description', content: `Build an amazing web site design and become your own boss.`});
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
  }

}
