import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { BannerService } from './banner.service';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public banners: any;
  public base = environment.restAPI.baseURL;

  constructor(public banner: BannerService) { }

  getInterval(interval, elem, transitions, images, enabled) {
    if (enabled) {
      const IMAGES = images;
      const TRANSITIONS = transitions;
      let currentImg = IMAGES[0];
      let currentAnimation = TRANSITIONS[0];

      setInterval(() => {
        let nextImg = IMAGES[IMAGES.indexOf(currentImg) + 1];
        let nextAnimation = TRANSITIONS[TRANSITIONS.indexOf(currentAnimation) + 1];

        if (nextImg === undefined || nextImg === null) {nextImg = IMAGES[0]; }
        if (nextAnimation === undefined || nextImg === null) {nextAnimation = TRANSITIONS[0]; }

        $(`#banner${elem}-webp`)
        .removeClass(`${currentAnimation}`)
        .addClass(`${nextAnimation}`)
        .attr(`srcset`, `./../../../../assets/hero/animate/${nextImg}.webp`);

        $(`#banner${elem}-jpg`)
        .removeClass(`${currentAnimation}`)
        .addClass(`${nextAnimation}`)
        .attr(`src`, `./../../../../assets/hero/animate/${nextImg}.jpg`);

        currentImg = nextImg;
        currentAnimation = nextAnimation;
      }, interval);
    }
  }

  getBannerImages() {
    this.banners = [];
    return this.banner.getBannerImagesSvc().subscribe((response: any) => {
      if (response) {
        this.banners = response.data;
        this.banners.forEach((item) => {
          this.getInterval(item.interval, item.id, item.transitions, item.imgs, item.isEnabled);
        });
        } else {
          throw new Error('Not able to retrieve data');
        }
      });
  }

  ngOnInit() {
    this.banners = [];
    this.getBannerImages();
  }
}
