import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  color = 'hotpink';
  styles = {
    textShadow: '2pt 2pt #456789',
  };
  constructor() {}

  ngOnInit(): void {}
}
