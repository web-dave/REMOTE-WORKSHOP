import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'tr[app-tr]',
  templateUrl: './tr.component.html',
  styleUrls: ['./tr.component.scss'],
})
export class TrComponent {
  @Input() book!: IBook;
  @Output() pong = new EventEmitter<IBook>();

  selectThisBook(e: Event) {
    console.log(e);
    this.pong.emit(this.book);
  }
}
