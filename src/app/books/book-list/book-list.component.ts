import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  private bookService = inject(BookService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  books$: Observable<IBook[]> = this.bookService.getAll();

  @Input()
  error = false;

  hi(e: IBook) {
    console.log(e);
    this.router.navigate([e.isbn], { relativeTo: this.route });
    //   this.error = Boolean((e.target as HTMLInputElement).value);
  }
}
