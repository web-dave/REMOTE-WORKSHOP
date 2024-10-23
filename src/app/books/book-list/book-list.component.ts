import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  private service = inject(BookService);
  books: any[] = [];

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => (this.books = data),
      complete: () => console.log('Done'),
    });
  }
}
