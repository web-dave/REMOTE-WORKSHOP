import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() content: IBook = { abstract: '', author: '', title: '' };
  @Output() goto = new EventEmitter<IBook>();
  color = 'hotpink';
  styles = {
    textShadow: '2pt 2pt #456789',
  };
  date = new Date();
  constructor() {}

  ngOnInit(): void {}

  myFunk(ev: MouseEvent) {
    console.log(ev);
    this.goto.emit(this.content);
    // this.content.title += ev.x;
  }
}
