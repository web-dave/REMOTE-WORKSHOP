import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NEVER, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IBook } from 'src/models/book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  book$: Observable<IBook> = NEVER;
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    // this.book$ = this.service.getBook(this.route.snapshot.params['isbn']);

    // this.route.params.subscribe(
    //   (data) => (this.book$ = this.service.getBook(data['isbn']))
    // );

    this.book$ = this.route.params.pipe(
      switchMap((data) => this.service.getBook(data['isbn']))
    );
  }
}
