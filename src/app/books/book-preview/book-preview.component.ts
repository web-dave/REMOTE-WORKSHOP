import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent {
  @Input() book!: IBook;
  @Output() bookSelected = new EventEmitter<IBook>();

  selectBook() {
    this.bookSelected.emit(this.book);
  }
}
