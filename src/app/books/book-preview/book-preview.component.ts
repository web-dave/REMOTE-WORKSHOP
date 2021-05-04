import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from '../ibook.interface';

@Component({
  selector: 'zeiss-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent implements OnInit {
  @Input() book: IBook;
  @Output() bookSelected = new EventEmitter<IBook>();
  constructor() {}

  ngOnInit(): void {}

  select() {
    this.bookSelected.emit(this.book);
  }
}
