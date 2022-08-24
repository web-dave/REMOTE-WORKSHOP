import { Component } from '@angular/core';
import { IBook } from './book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookmankey-client';
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

  constructor() {
    // setInterval(() => {
    //   this.searchStr = 'why';
    //   // console.log(this.searchStr);
    // }, 1500);
  }
  transform(books: IBook[] = [], searchTerm: string = ''): IBook[] {
    console.log('METHOD', searchTerm);
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  goToDetails(b: IBook) {
    console.table(b);
  }

  updateSearchString(e: Event) {
    this.searchStr = (e.target as HTMLInputElement).value;
  }
}
