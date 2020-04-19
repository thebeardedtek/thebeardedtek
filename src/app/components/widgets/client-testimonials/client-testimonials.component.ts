import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-testimonials',
  templateUrl: './client-testimonials.component.html',
  styleUrls: ['./client-testimonials.component.css']
})
export class ClientTestimonialsComponent implements OnInit {
  public activeReview: any;
  public setInterval: any;

  constructor(public router: Router) { }

  toGoogleReviews() {
    window.open('https://g.page/thebeardedtek?gm', '_blank');
    // window.location.href="https://g.page/thebeardedtek?gm";

  }


  cycleReviews() {
    let counter = 0;
    const reviews = ['first', 'second', 'third'];


    this.setInterval = setInterval(() => {
      this.activeReview = reviews[counter];
      counter++;
      if (counter > 2) {
        counter = 0;
      }
    }, 3000);


  }

  selectReview(review) {
    this.activeReview = null;
    this.activeReview = review;
    clearInterval(this.setInterval);

    setTimeout(()=>{
      this.cycleReviews();
    },5000);

  }

  ngOnInit() {

    this.cycleReviews();
  }

}
