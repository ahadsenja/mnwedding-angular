import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bigday',
  templateUrl: './bigday.component.html',
  styleUrls: ['./bigday.component.css']
})
export class BigdayComponent implements OnInit {

  countDownDate = new Date("Nov 8, 2021 08:00:00").getTime();

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.countDown();
  }

  countDown() {
    let interval = setInterval(() => {
      // Get today's date and time
      let now = new Date().getTime();
      // Find the distance between now and count down date
      let distance = this.countDownDate - now;

      // Time calculations for days, hours, minutes, seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        console.log('Expired')
      }
    }, 1000)
  }

}
