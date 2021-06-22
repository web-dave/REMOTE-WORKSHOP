import { createReducer, on } from '@ngrx/store';
import { type } from 'os';
import { IBook } from '../shared/book.interface';
import { newBookSave, setAllBooks } from './books.action';

export type BookList = IBook[];
export type IBooksFeature = { booklist: BookList; id?: number };
const books: BookList = [];

export const booksReducer = createReducer(
  books,
  on(newBookSave, (state, action) => [...state, action.book]),
  on(setAllBooks, (state, action) => [...state, ...action.books])
);
