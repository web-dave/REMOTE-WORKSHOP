import { Component } from '@angular/core';
import { IBook } from './book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookmonkey-client';
  searchStr = '';
  
  data: IBook[] = [{
    author: 'Simon Sinek',
    title: 'Start with WHY',
    isbn: '',
    abstract: "START WITH WHY shows that the leaders who've ..."
  },{
    title: 'How to win friends',
    author: 'Dale Carnegie',
    abstract: 'In this book ...',
    isbn:'879-9879-654-654-5'
  },{
    title: 'The Willpower Instinct: How Self-Control Works ...',
    author: 'Kelly McGonigal',
    abstract: 'Based on Stanford University ...',
    isbn: '',
  },
];

  goToBookDetails(data: IBook){
    console.log(data)
  }
  setSearchString(evt: Event){

    this.searchStr = (evt.target as HTMLInputElement).value
  }
}
