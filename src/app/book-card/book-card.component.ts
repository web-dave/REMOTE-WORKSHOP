import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() content: IBook = { title: '', author: '', abstract: '' };
  foo = 'FOOOO';
  customStyle = {
    color: 'hotpink',
  };
  i = 0;
  constructor() {}

  goToBook(e: MouseEvent) {
    console.log(e);
    // (e.target as HTMLButtonElement).innerText = 'Moin';
  }

  ngOnInit(): void {
    // setInterval(() => this.i++, 1500);
  }
}
