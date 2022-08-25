import { Component } from '@angular/core';
import { IBook } from './book.interface';
import { BookService } from './book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  searchStr = '';
  show = true;
  books$: Observable<IBook[]> = this.service.getAll();

  constructor(private service: BookService) {}

  goToDetails(b: IBook) {
    console.table(b);
  }

  updateSearchString(e: Event) {
    this.searchStr = (e.target as HTMLInputElement).value;
  }
}
