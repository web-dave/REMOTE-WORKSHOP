export interface IBook {
  title: string;
  author: string;
  abstract: string;
  subtitle: string;
  isbn: string;
  numPages: number;
  publisher: string;
  price: string;
  cover: string;
}

export class Book implements IBook {
  title: string = '';
  author: string = '';
  abstract: string = '';
  subtitle: string = '';
  isbn: string = '';
  numPages: number = 0;
  publisher: string = '';
  price: string = '';
  cover: string = '';
}
