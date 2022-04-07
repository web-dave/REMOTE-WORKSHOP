import { Component } from '@angular/core';
import { IBook } from 'src/models/book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '<h1>bookmonkey-client!!!!🦄</h1>';
  book: IBook = {
    title: 'How to win friends',
    author: 'Dale Carnegie',
    abstract: 'In this book ...',
  };
}
