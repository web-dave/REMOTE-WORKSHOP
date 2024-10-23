import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../book.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  private service = inject(BookService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  books: IBook[] = [];

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data) => (this.books = data),
      complete: () => console.log('Done'),
    });
  }

  gotoBook(e: IBook) {
    console.log(e);
    this.router.navigate([e.isbn], { relativeTo: this.route });
  }
}
