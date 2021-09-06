import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NEVER, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  book$: Observable<IBook> = NEVER;
  data!: IBook;
  constructor(private service: BookService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.book$ = this.service.getBook(this.route.snapshot.paramMap.get('isbn'));

    // this.route.params.subscribe((params) => {
    //   this.service.getBook(params.isbn).subscribe((book) => (this.data = book));
    // });

    this.book$ = this.route.params.pipe(
      switchMap((params) => this.service.getBook(params.isbn))
    );
  }
}
