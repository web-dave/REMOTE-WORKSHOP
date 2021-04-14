import { createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBook } from '../book';

export const booksStoreName = 'books';

export interface IBookEntity {
  [isbn: string]: IBook;
}
export const bookAdapter = createEntityAdapter<IBook>();

export interface BooksState {
  books: IBook[];
}

export const initialState: BooksState = {
  books: [],
};

export const getBooksSelector = createSelector(
  createFeatureSelector(booksStoreName),
  (data: BooksState) => data.books
);
