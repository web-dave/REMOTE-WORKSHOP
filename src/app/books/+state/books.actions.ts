import { Action } from "@ngrx/store";
import { IBook } from "../book";

export const LOAD_BOOKS = '[books] load books';
export const WAIT_FOR_BOOKS = '[books] wait for books';

export class LoadBooks implements Action {
    readonly type = LOAD_BOOKS;
    constructor(public books: IBook[]) { }
}

export class WaitForBooks implements Action {
    readonly type = WAIT_FOR_BOOKS;
}

export type BookActions = LoadBooks | WaitForBooks;
