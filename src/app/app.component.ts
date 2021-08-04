import { Component } from '@angular/core';
import { IBook } from './book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookmonkey-client';
  
  data: IBook = {
    title: 'How to win friends',
    author: 'Dale Carnegie',
    abstract: 'In this book ...',
    isbn:'879-9879-654-654-5'
  };
}
