import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() content: IBook = { title: '', author: '', abstract: '' };
  myStyle = {
    color: 'pink',
  };
  constructor() {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.myStyle = {
    //     color: 'red',
    //   };
    // }, 2000);
  }
}
