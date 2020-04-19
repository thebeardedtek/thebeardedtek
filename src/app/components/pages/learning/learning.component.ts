import { Component, OnInit} from '@angular/core';
import { environment } from './../../../../environments/environment';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  public base: any;
  public apis: any;
  public readAdvantage: Boolean;
  public readHTML: Boolean;
  public readCSS: Boolean;
  public readJS: Boolean;

  constructor(private titleService: Title, private meta: Meta) { }

  toggleAdvantage(){
    this.readAdvantage = !this.readAdvantage;
  }

  toggleHTML(){
    this.readHTML = !this.readHTML;
  }

  toggleCSS(){
    this.readCSS = !this.readCSS;
  }

  toggleJS(){
    this.readJS = !this.readJS;
  }

  ngOnInit() {
    window.scroll(0, 0);
    this.titleService.setTitle(`Become an Engineer | Atlanta Mobile Web Design`);
    this.meta.updateTag({ name: 'description', content: `Learn how to code HTML, CSS, JavaScript, Python, and more in only 30 days.`});
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
    this.readAdvantage = false;
    this.readHTML = false;
    this.readCSS = false;
    this.readJS = false;
  }
}

