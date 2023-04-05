import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent {
  @Input() book: IBook | undefined;
  @Output() bookselected = new EventEmitter<IBook>();

  selectThisBook(e: Event) {
    console.log(e);
    this.bookselected.emit(this.book);
  }
}
