import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() content: IBook = {
    title: '',
    abstract: '',
    author: '',
    subtitle: '',
    isbn: '',
    numPages: 0,
    publisher: '',
    price: '',
    cover: '',
  };
  @Output() detailsClick = new EventEmitter<IBook>();
  customStyles = {
    color: 'hotpink',
    fontSize: '40px',
  };
  constructor() {}

  ngOnInit(): void {
    // setInterval(() => console.log('Moin'), 1500);
    // console.log(this.content);
  }

  handleDetailClick(event: MouseEvent) {
    console.log(event.target, (event.target as HTMLButtonElement).innerText);
    this.detailsClick.emit(this.content);
  }
}
