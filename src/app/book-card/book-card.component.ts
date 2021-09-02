import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() content: IBook = { abstract: '', author: '', title: '' };
  color = 'hotpink';
  styles = {
    textShadow: '2pt 2pt #456789',
  };
  constructor() {}

  ngOnInit(): void {}
}
