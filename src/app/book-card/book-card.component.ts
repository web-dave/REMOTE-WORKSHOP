import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/models/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() content: IBook = { title: '', author: '', abstract: '' };
  customStyles = {
    backgroundColor: 'hotpink',
    color: 'purple',
  };
  constructor() {}

  ngOnInit(): void {}
}
