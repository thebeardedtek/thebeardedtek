import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-home-cta',
  templateUrl: './home-cta.component.html',
  styleUrls: ['./home-cta.component.css']
})
export class HomeCtaComponent implements OnInit {
  public base: any;
  public apis: any;
  public imgHeight: number;
  public imgWidth: number;
  public hoverActive: string;


  constructor() { }

  getCTAHeight(element) {
    this.imgHeight = document.getElementById(`${element}`).clientHeight;
    this.imgWidth = document.getElementById(`${element}`).clientWidth;
    return {'width.px': this.imgWidth, 'height.px': this.imgHeight};
  }

  setActiveCta(cta) {
      this.hoverActive = cta;
  }

  refreshOverlay() {
    this.hoverActive = null;
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();
  }

  ngOnInit() {
    this.hoverActive = null;
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;

    $('.home-cta-col1').mouseover(() => {
      this.refreshOverlay();
      this.getCTAHeight('home-cta-img1');
      this.setActiveCta('home-cta-img1');
    }).mouseleave(()=>{
      this.refreshOverlay();
    });

    $('.home-cta-col2').mouseover(() => {
      this.refreshOverlay();
      this.getCTAHeight('home-cta-img2');
      this.setActiveCta('home-cta-img2');
    }).mouseleave(()=>{
      this.refreshOverlay();
    });

    $('.home-cta-col3').mouseover(() => {
      this.refreshOverlay();
      this.getCTAHeight('home-cta-img3');
      this.setActiveCta('home-cta-img3');
    }).mouseleave(()=>{
      this.refreshOverlay();
    });
  }
}
