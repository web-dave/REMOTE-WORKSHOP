import { Component } from '@angular/core';
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

  constructor(private service: BookApiService) {}

  goToBookDetails(data: IBook) {
    console.log(data);
  }

  setSearchString(evt: Event) {
    this.searchStr = (evt.target as HTMLInputElement).value;
  }
}
