import { Component } from '@angular/core';
import { Book, IBook } from './book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Conet client!';
  searchTerm: string = '';
  books: Book[] = [
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
  navigateToDetails(b: Book) {
    console.table(b);
  }

  updateSearchTerm(input: Event) {
    this.searchTerm = (input.target as HTMLInputElement).value;
  }
}
