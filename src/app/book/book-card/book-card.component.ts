import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() content: IBook = { title: '', author: '', abstract: '' };
  @Output() ping = new EventEmitter<IBook>();
  foo = 'FOOOO';
  customStyle = {
    color: 'hotpink',
  };
  i = 0;
  // event = new Event('ping');

  constructor() {
    // document.querySelector('h3')?.dispatchEvent(this.event);
  }

  goToBook(e: MouseEvent) {
    console.log(e);
    this.ping.emit(this.content);
    // (e.target as HTMLButtonElement).innerText = 'Moin';
  }

  ngOnInit(): void {
    // setInterval(() => this.i++, 1500);
  }
}
