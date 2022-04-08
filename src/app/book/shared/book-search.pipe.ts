import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from 'src/models/book.interface';

@Pipe({
  name: 'bookSearch',
  pure: true,
})
export class BookSearchPipe implements PipeTransform {
  transform(books: IBook[], searchTerm: string): IBook[] {
    return searchTerm === ''
      ? books
      : books.filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
  }
}
