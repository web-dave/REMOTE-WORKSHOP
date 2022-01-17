import { Component, OnInit } from '@angular/core';
import { BookApiService } from './book-api.service';
import { IBook } from './book.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  search = '';
  books: IBook[] = [];
  constructor(private service: BookApiService) {
    this.books = this.service.getBooks();
  }

  ngOnInit(): void {}

  navigateToDetails(data: IBook) {
    console.log('Data:', data);
  }
}
