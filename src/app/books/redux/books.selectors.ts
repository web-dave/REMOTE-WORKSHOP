import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBooksFeature } from './books.reducer';

export const BooksModuleSelector =
  createFeatureSelector<IBooksFeature>('BooksModule');

export const getBooksSelector = createSelector(
  BooksModuleSelector,
  (feature) => feature.booklist
);

export const getBookSelector = (isbn: string) =>
  createSelector(getBooksSelector, (list) =>
    list.find((book) => book.isbn === isbn)
  );
