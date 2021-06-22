import { createAction, props } from '@ngrx/store';
import { IBook } from '../shared/book.interface';
export const createBookStart = '[books] New Book';
export const createBookSave = '[books] New Book Save';
export const setBookList = '[books] BookList';

export const newBookStart = createAction(createBookStart);
export const newBookSave = createAction(
  createBookSave,
  props<{ book: IBook }>()
);
export const setAllBooks = createAction(
  setBookList,
  props<{ books: IBook[] }>()
);
