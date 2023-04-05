import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent {
  @Input() book: any;
  @Output() bookselected = new EventEmitter();

  selectThisBook(e: any) {
    console.log(e);
    this.bookselected.emit(this.book);
  }
}
