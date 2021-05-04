import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BookService } from '../book.service';
import { IBook } from '../ibook.interface';

@Component({
  selector: 'zeiss-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<IBook>;
  i = 0;
  constructor(private route: ActivatedRoute, private service: BookService) {}
  getI(value: number, arg: string = 'S.') {
    console.log('getI', value);
    return `${arg}: ${value}`;
  }
  ngOnInit(): void {
    setInterval(() => {
      this.i = 1;
    }, 1500);
    this.book$ = this.route.params.pipe(
      switchMap((data) => this.service.getBook(data.isbn))
    );
  }

  add(a, b) {
    return a + b;
  }
}
