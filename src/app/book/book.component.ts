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
  show = true;
  books: IBook[] = [];
  constructor(private service: BookApiService) {
    // Deprecated
    // this.service.getBooks().subscribe((data) => (this.books = data));
    console.log('1');
    this.service.getBooks().subscribe({
      next: (data) => {
        this.books = data;
        console.log(2);
      },
      complete: () => console.log(3),
    });
  }

  ngOnInit(): void {}

  navigateToDetails(data: IBook) {
    console.log('Data:', data);
  }
}
