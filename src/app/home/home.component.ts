import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = ['../../assets/carousal1.jpg', '../../assets/carousal2.jpg', '../../assets/carousal3.jpg'];

  showKnowMore = false;
  constructor() { }

  ngOnInit(): void {
  }
  onPrevChange(change) {
    change = this.images[0];
  }
  onNextChange(change) {
    change = this.images[2];
  }
  knowMore() {
    this.showKnowMore = true;
  }

}
