import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { environment } from './../../../../environments/environment';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {


  navigationSubscription;
  public base: any;
  public apis: any;

  constructor(private router: Router, private titleService: Title, private meta: Meta) {
    // subscribe to the router events - storing the subscription so
   // we can unsubscribe later.
   this.navigationSubscription = this.router.events.subscribe((e: any) => {
     // If it is a NavigationEnd event re-initalise the component
     if (e instanceof NavigationEnd) {
       this.initialiseInvites();
     }
   });
  }

  ngOnInit() {
    window.scroll(0, 0);
    this.titleService.setTitle(`Schedule Demo | Atlanta Mobile Web Design`);
    this.meta.updateTag({ name: 'description', content: `Schedule a demo presentation to gain a better understanding of the services we offer`});
    $.getScript("https://assets.calendly.com/assets/external/widget.js", function() {
    });
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;


  }


  initialiseInvites() {
   // Set default values and re-fetch any data you need.
 }
 ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we
    // don't then we will continue to run our initialiseInvites()
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
       this.navigationSubscription.unsubscribe();
    }
  }
}




