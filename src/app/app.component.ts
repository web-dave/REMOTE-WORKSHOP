import { Component } from '@angular/core';
import { IBook } from './book.interface';

@Component({
  selector: 'ng-sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '?? remote-workshop';
  data: IBook = {
    title: 'How to win friends',
    author: 'Dale Carnegie',
    abstract: 'In this book ...',
    isbn:'879-9879-654-654-5'
  };
}
