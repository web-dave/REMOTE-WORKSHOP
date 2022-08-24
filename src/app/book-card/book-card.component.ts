import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() content: IBook | undefined; // = { title: '', author: '', abstract: '' };
  @Output() detailClick = new EventEmitter<IBook>();
  foo = [];
  myStyle = {
    color: 'orange',
  };
  constructor() {}

  ngOnInit(): void {}

  pong(e: MouseEvent) {
    // console.log(e);
    this.detailClick.emit(this.content);
  }
}
