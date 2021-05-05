import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BookService } from '../book.service';
import { IBook } from '../ibook.interface';

@Component({
  selector: 'zeiss-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit {
  book!: IBook;
  book$: Observable<IBook>;

  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    this.book$ = this.route.params.pipe(
      switchMap((data) => this.service.getBook(data.isbn))
    );
    this.book$.subscribe((data) => (this.book = data));
  }
  saveBook(b = this.book) {
    console.log(b);
    this.service
      .updateBook(b)
      .subscribe((data: IBook) => console.log(data.isbn));
  }
}
