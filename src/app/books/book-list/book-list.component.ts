import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoadBooks } from '../+state/books.actions';

@Component({
  selector: 'hurz-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  
  // Add:
  $books: Observable<IBook[]> = 
    this.store.select(appState => appState['books'].books);
  
  constructor(
    // Add:
    private store: Store<{}>,
    private service: BooksService) {}

  ngOnInit(): void {
    // Update:
    this.service.getBooks().subscribe(books => {
      this.store.dispatch(new LoadBooks(books));
    })
  }
}
