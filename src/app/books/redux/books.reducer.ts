import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { IBook } from '../shared/book.interface';
import { newBookSave, setAllBooks } from './books.action';

export const bookAdapter = createEntityAdapter<IBook>({
  selectId: (book) => book.isbn,
});
export type BookList = IBook[];
export type IBooksFeature = EntityState<IBook>;
const initialBookState = bookAdapter.getInitialState();
export const bookListReducer = createReducer(
  initialBookState,
  on(newBookSave, (state, action) => bookAdapter.addOne(action.book, state)),
  on(setAllBooks, (state, action) => bookAdapter.setAll(action.books, state))
);

// export const booksReducer: ActionReducerMap<IBooksFeature> = {
//   booklist: bookListReducer,
// };
