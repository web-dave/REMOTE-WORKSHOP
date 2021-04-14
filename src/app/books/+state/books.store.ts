import { IBook } from "../book";

export const booksStoreName = 'books';

export interface BooksState {
    books: IBook[];
}

export const initialState: BooksState = {
    books: []
};
