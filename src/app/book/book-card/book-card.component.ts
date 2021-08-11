import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Output() detailClick = new EventEmitter<IBook>();

  @Input() book!: IBook;
  foo!: IBook;

  link = 'lonk';
  styling = {
    color: 'hotpink',
  };
  constructor() {}

  linkWasClicked() {
    this.detailClick.emit(this.book);
  }
}
