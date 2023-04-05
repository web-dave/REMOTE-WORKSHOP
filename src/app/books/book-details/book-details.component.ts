import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  book: IBook | undefined;
  sub: any;
  private route = inject(ActivatedRoute);
  private service = inject(BookService);
  ngOnInit() {
    this.sub = this.service
      .getBook(this.route.snapshot.params['isbn'])
      .subscribe((response) => (this.book = response));

    // this.route.params.subscribe((data) => {
    //   this.service
    //     .getBook(data['isbn'])
    //     .subscribe((response) => (this.book = response));
    // });
  }
  ngOnDestroy(): void {
    console.log('Destroi');

    this.sub.unsubscribe();
  }
}
