import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { windowWhen } from 'rxjs/operators';
import { IBook } from '../shared/book.interface';

@Component({
  selector: 'ng-sw-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent implements OnInit, OnChanges {
  @Input() book: IBook;
  @Output() bookselected = new EventEmitter();
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {}

  selectThisBook() {
    this.bookselected.emit(this.book);
  }
}
