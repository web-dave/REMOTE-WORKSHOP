import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookApiService } from './book-api.service';
import { IBook } from './book.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  searchStr = '';

  books$: Observable<IBook[]> = this.service.getBooks();

  data: IBook[] = [];

  constructor(private service: BookApiService, private router: Router) {
    this.books$.subscribe(
      (d) => console.log(d),
      (e) => console.error(e),
      () => console.log('END')
    );
  }

  goToBookDetails(data: IBook) {
    console.log(data);
    this.router.navigate(['books', 'details', data.isbn]);
  }

  setSearchString(evt: Event) {
    this.searchStr = (evt.target as HTMLInputElement).value;
  }
}
