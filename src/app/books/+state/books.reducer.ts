import { BookActions, LOAD_BOOKS } from './books.actions';
import { bookAdapter, BooksState, initialState } from './books.store';

export function booksReducer(
  state = initialState,
  action: BookActions
): BooksState {
  switch (action.type) {
    case LOAD_BOOKS:
      return bookAdapter.setAll(action.books, state);
    default: {
      return state;
    }
  }
}
