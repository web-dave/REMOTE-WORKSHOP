import { Component, OnInit } from '@angular/core';
import { IBook } from './book.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  title = ' bookmonkey-client';
  foo = '🐵';
  bar = 'pojpjo';
  searchTerm = '';
  books: IBook[] = [
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
  constructor() {
    // setInterval(() => {
    //   this.searchTerm = 'to';
    // }, 1500);
  }

  showDetails(data: IBook) {
    console.table(data);
  }

  // updateSearch(event: Event) {
  //   console.log(event);
  //   this.searchTerm = (event.target as HTMLInputElement).value;
  // }
  transform(books: IBook[] = [], search: string = ''): IBook[] {
    console.log('fn', search);
    return books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  ngOnInit(): void {}
}
