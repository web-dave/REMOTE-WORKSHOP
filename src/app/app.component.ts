import { Component } from '@angular/core';
import { IBook } from './book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookmankey-client';
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

  goToDetails(b: IBook) {
    console.table(b);
  }
}
