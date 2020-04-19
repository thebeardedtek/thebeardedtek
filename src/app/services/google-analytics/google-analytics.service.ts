import { Injectable } from '@angular/core';
declare let gtag: Function;



@Injectable({
  providedIn: 'root'
})



export class GoogleAnalyticsService {

  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string,
    eventValue: number ) {
         gtag('event', eventName, {
                 eventCategory: eventCategory,
                 eventAction: eventAction,
                 eventLabel: eventLabel,
                 eventValue: eventValue
               });
    }


  constructor() { }
}