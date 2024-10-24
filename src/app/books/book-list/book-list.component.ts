import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../book.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  private service = inject(BookService);
  books$ = this.service.getAll();
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  gotoBook(e: IBook) {
    console.log(e);
    this.router.navigate([e.isbn], { relativeTo: this.route });
  }
}
