import { Component } from '@angular/core';
import { IBook } from './book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  search = '';
  title = 'bookmonkey-client';
  foo = 'Bar';

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
    // setInterval(() => (this.search = 'WHY'), 1500);
  }

  navigateToDetails(data: IBook) {
    console.log('Data:', data);
  }

  // updateSearch(event: string) {
  //   this.search = event;
  // }

  // transform(books: IBook[], searchString: string): IBook[] {
  //   console.log('METHOD', searchString);
  //   return books.filter((book) =>
  //     book.title.toLowerCase().includes(searchString.toLowerCase())
  //   );
  // }
}
