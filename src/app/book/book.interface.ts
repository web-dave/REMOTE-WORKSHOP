export interface IBook {
  title: string;
  author: string;
  abstract: string;
}

export class Book implements IBook {
  title: string = '';
  author: string = '';
  abstract: string = '';
}
