import { Component, OnInit } from '@angular/core';
import { IBook } from './book.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  searchStr = '';
  books: IBook[] = [
    {
      title: 'Moby Click',
      author: 'Hurz',
      abstract: 'Click, puff, paff...',
    },
    {
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: 'How to Win Friends and Influence ...',
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...',
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ...",
    },
  ];

  constructor() {}
  ngOnInit(): void {}

  goToDetails(b: IBook) {
    console.table(b);
  }

  updateSearchString(e: Event) {
    this.searchStr = (e.target as HTMLInputElement).value;
  }
}
