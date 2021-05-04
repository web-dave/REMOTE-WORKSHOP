import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BookService } from '../book.service';
import { IBook } from '../ibook.interface';

@Component({
  selector: 'zeiss-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  book: IBook;
  sub = new Subscription();
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    // this.sub.add(
    //   this.service
    //     .getBook(this.route.snapshot.paramMap.get('isbn'))
    //     .subscribe(console.log)
    // );

    // this.sub.add(
    //   this.route.params.subscribe((data) => {
    //     this.sub.add(this.service.getBook(data.isbn).subscribe(console.log));
    //   })
    // );
    this.sub.add(
      this.route.params
        .pipe(switchMap((data) => this.service.getBook(data.isbn)))
        .subscribe((data) => (this.book = data))
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
