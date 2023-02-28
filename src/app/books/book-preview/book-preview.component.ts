import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'tr[app-book-preview]',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent {
  @Input() book: IBook | undefined;
  foo!: string[];
  @Output() bookselected = new EventEmitter<IBook>();

  ping() {
    this.bookselected.emit(this.book);
  }
}
