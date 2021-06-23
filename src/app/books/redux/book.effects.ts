import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { BooksService } from '../shared/books.service';
import {
  initBookList,
  newBookSave,
  newBookStart,
  setAllBooks,
} from './books.action';

@Injectable()
export class BookEffects {
  create = createEffect(
    () =>
      this.actions$.pipe(
        ofType(newBookSave),
        exhaustMap((newBookSaveAction) =>
          this.service.createBook(newBookSaveAction.book)
        ),
        map((data) => {
          console.log(data);
          return newBookStart();
        })
      ),
    { dispatch: true }
  );
  loadBooks = createEffect(() =>
    this.actions$.pipe(
      ofType(initBookList),
      exhaustMap((action) => this.service.getBooks()),
      map((books) => setAllBooks({ books }))
    )
  );
  constructor(private actions$: Actions, private service: BooksService) {}
}
