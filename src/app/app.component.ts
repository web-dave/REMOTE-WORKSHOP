import { Component } from '@angular/core';
import { IBook } from './book.interface';
import * as foo from './foo';

@Component({
  selector: 'app-root',
  template: `
    <app-book-card [content]="data"></app-book-card>
    <!-- <app-book-card></app-book-card>
    <app-book-card></app-book-card>
    <app-book-card></app-book-card>
    <app-book-card></app-book-card>
    <app-book-card></app-book-card>
    <app-book-card></app-book-card>
    <app-book-card></app-book-card>
    <app-book-card></app-book-card> -->
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookmonkey-client!!!';
  foo = foo.foo;
  baz = foo.bar();

  data: IBook = {
    title: 'How to win friends',
    author: 'Dale Carnegie',
    abstract: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Est earum harum
    similique ex officia odit. Atque sapiente distinctio perspiciatis ipsa
    obcaecati doloremque! Repellat temporibus doloribus consequuntur repellendus
    deleniti error voluptatem!`,
  };
}
