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
    this.service.getBooks().subscribe({
      next: (data) => (this.books = data),
      error: (err) => {
        this.books = [];
      },
    });
    // this.service.getBooks().subscribe((data) => (this.books = data));
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.searchTerm = 'why';
    //   console.log('ping');
    // }, 1500);
  }
  navigateToDetails(b: IBook) {
    console.table(b);
  }

  updateSearchTerm(input: Event) {
    this.searchTerm = (input.target as HTMLInputElement).value;
  }
}
