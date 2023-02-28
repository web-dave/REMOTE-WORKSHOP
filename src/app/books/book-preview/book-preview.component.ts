import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tr[app-book-preview]',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent {
  @Input() book: any;
  foo: string[] | undefined;
  @Output() bookselected = new EventEmitter();

  ping() {
    this.bookselected.emit(this.book);
  }
}
