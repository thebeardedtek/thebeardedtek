import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonService } from './../../../services/common/common.service';
@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {
  public base: any;
  public apis: any;
  public promo: any;
  public getPromo: any;

  constructor(private titleService: Title, private meta: Meta, public router: Router, public route: ActivatedRoute, public common: CommonService) { }

  getPlanParam() {
    this.promo = null;
    this.getPromo = this.route.paramMap.subscribe((item: any) => {
      if (item) {
        this.promo = this.common.removeWhiteSpace(item.params.type.toUpperCase().trim());
        console.log('this.promo', this.promo);
      } else {
        this.promo = null;
      }
    });
    return this.promo;
  }

  ngOnInit() {
    window.scroll(0, 0);
    this.titleService.setTitle(`Promo | Atlanta Mobile Web Design`);
    this.meta.updateTag({ name: 'description', content: `View the latest promotion for web design, mobile apps, and maintenance`});
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
    this.promo = null;
    this.getPlanParam();
    
  }

}
 