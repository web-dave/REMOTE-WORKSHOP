import { Component } from '@angular/core';
import { IBook } from './book.interface';
import * as foo from './foo';

@Component({
  selector: 'app-root',
  template: `
    <app-book-card
      [content]="book"
      (goto)="navigate($event)"
      *ngFor="let book of data; let i = index; let e = even; let o = odd"
    ></app-book-card>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookmonkey-client!!!';
  foo = foo.foo;
  baz = foo.bar();

  data: IBook[] = [
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

  navigate(book: IBook) {
    console.table(book);
  }
}
