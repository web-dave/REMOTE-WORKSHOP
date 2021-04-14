import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { IBook } from '../book';
import { BooksService } from '../books.service';

export const LOAD_BOOKS = '[books] load books';
export const WAIT_FOR_BOOKS = '[books] wait for books';

export class LoadBooks implements Action {
  readonly type = LOAD_BOOKS;
  constructor(public books: IBook[]) {}
}

export class WaitForBooks implements Action {
  readonly type = WAIT_FOR_BOOKS;
}

@Injectable()
export class BookEffects {
  @Effect({ dispatch: false })
  loadBooks = this.actions.pipe(
    ofType(WAIT_FOR_BOOKS),
    tap(() => this.service.loadBooks())
  );

  constructor(private actions: Actions, private service: BooksService) {}
}

export type BookActions = LoadBooks | WaitForBooks;
