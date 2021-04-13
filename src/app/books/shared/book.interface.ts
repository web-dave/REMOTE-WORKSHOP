export interface IBook {
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
  numPages: number;
  author: string;
  publisher: IUser;
  cover: string;
  read?: (ln: number) => void;
}

interface IUser {
  name: string;
  url: string;
}

export type IBookList = IBook[];
