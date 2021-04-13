import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from '../shared/book.interface';

@Component({
  selector: 'ng-sw-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent implements OnInit {
  @Input() book: IBook;
  @Output() bookselected = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  selectThisBook() {
    this.bookselected.emit(this.book);
  }
}
