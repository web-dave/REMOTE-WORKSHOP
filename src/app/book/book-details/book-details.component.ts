import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NEVER, Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<IBook> = NEVER;
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    const isbn = this.route.snapshot.params['isbn'];
    this.book$ = this.service.getBookByIsbn(isbn);
  }
}
