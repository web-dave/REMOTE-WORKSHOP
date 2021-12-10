import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { BookApiService } from './book-api.service';
import { IBook } from './book.interface';
import { NEVER, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, AfterViewChecked {
  bookSearchTerm = '';
  foo = 'Hans';
  books$: Observable<IBook[]> = NEVER;

  constructor(
    private service: BookApiService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.books$ = this.service.getBooks();
  }

  ngAfterViewChecked(): void {
    this.foo = 'Grete';
    this.cdr.detectChanges();
  }
  goToDetails(e: IBook) {
    console.table(e);
    this.router.navigate([e.isbn], { relativeTo: this.route });
  }
}
