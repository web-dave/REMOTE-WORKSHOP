import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBook } from '../book';

export const booksStoreName = 'books';

export interface IBookEntity {
  [isbn: string]: IBook;
}
export const bookAdapter = createEntityAdapter<IBook>({
  selectId: (book) => book.isbn,
});

export interface BooksState extends EntityState<IBook> {}

export const initialState: BooksState = bookAdapter.getInitialState();

const selectAllBooks = bookAdapter.getSelectors().selectAll;

export const getBooksSelector = createSelector(
  createFeatureSelector(booksStoreName),
  selectAllBooks
);
