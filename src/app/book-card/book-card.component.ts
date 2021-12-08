import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() content: any;
  foo = 'FOOOO';
  customStyle = {
    color: 'hotpink',
  };
  i = 0;
  constructor() {}

  ngOnInit(): void {
    // setInterval(() => this.i++, 1500);
  }
}
