import { Component, OnInit } from '@angular/core';
import { BookApiService } from './book-api.service';
import { IBook } from './book.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  title = ' bookmonkey-client';
  foo = '🐵';
  bar = 'pojpjo';
  searchTerm = '';
  books: IBook[] = [];
  constructor(private api: BookApiService) {
    // setInterval(() => {
    //   this.searchTerm = 'to';
    // }, 1500);
    // api.getAllBook().subscribe({
    //   next: (data) => (this.books = data),
    // });
    api.getAllBook().subscribe(this.setBooks.bind(this)); //auch cool ;)
  }

  showDetails(data: IBook) {
    console.table(data);
  }

  setBooks(data: IBook[]) {
    this.books = data;
  }

  // updateSearch(event: Event) {
  //   console.log(event);
  //   this.searchTerm = (event.target as HTMLInputElement).value;
  // }
  transform(books: IBook[] = [], search: string = ''): IBook[] {
    console.log('fn', search);
    return books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  ngOnInit(): void {}
}

// function setBooks(data: IBook[]) {
//   this.books = data;
// }
