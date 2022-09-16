import { Component, OnInit } from '@angular/core';
import { IBook } from './book.interface';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  searchTerm: string = '';
  books: IBook[] = [];
  constructor(private service: BookService) {
    this.books = this.service.getBooks();
  }

  ngOnInit(): void {}
  navigateToDetails(b: IBook) {
    console.table(b);
  }

  updateSearchTerm(input: Event) {
    this.searchTerm = (input.target as HTMLInputElement).value;
  }
}
