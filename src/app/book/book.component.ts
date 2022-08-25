import { Component, OnInit } from '@angular/core';
import { IBook } from './book.interface';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  searchStr = '';
  books: IBook[] = [];

  constructor(private service: BookService) {
    // this.books = this.service.getAll();
  }
  ngOnInit(): void {
    this.service.getAll().subscribe({ next: (data) => (this.books = data) });
  }

  goToDetails(b: IBook) {
    console.table(b);
  }

  updateSearchString(e: Event) {
    this.searchStr = (e.target as HTMLInputElement).value;
  }
}
