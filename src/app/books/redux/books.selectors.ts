import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBook } from '../shared/book.interface';

export const getBooksSelector = createFeatureSelector<IBook[]>('booklist');

export const getBookSelector = (isbn: string) =>
  createSelector(getBooksSelector, (list) =>
    list.find((book) => book.isbn === isbn)
  );
