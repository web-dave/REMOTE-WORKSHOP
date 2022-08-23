import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  myStyle = {
    color: '#efefef',
  };
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.myStyle = {
        color: 'red',
      };
    }, 2000);
  }
}
