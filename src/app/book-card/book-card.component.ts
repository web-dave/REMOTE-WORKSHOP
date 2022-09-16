import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book, IBook } from '../book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  // @Input() content = new Book();
  @Output() detailClick = new EventEmitter<Book>();
  @Input() content: IBook | undefined; // = { abstract: '', author: '', title: '' };
  myStyle = {
    color: '#7845ff',
  };

  constructor() {}

  ngOnInit(): void {}

  handleDetailClick(e: MouseEvent) {
    e.preventDefault();
    console.log(e);
    this.detailClick.emit(this.content);
  }
}
