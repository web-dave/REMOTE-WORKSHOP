import { createFeatureSelector, createSelector } from '@ngrx/store';
import { bookAdapter, IBooksFeature } from './books.reducer';

const { selectAll, selectEntities } = bookAdapter.getSelectors();

export const BooksModuleSelector =
  createFeatureSelector<IBooksFeature>('booklist');

export const getBooksSelector = createSelector(BooksModuleSelector, selectAll);

export const getBookSelector = (isbn: string) =>
  createSelector(BooksModuleSelector, (state) => selectEntities(state)[isbn]);
