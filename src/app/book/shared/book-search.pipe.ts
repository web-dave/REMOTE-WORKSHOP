import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from 'src/models/book.interface';

@Pipe({
  name: 'bookSearch',
  pure: true,
})
export class BookSearchPipe implements PipeTransform {
  transform(books: IBook[] | null, searchTerm: string): IBook[] {
    console.log('PIPE', books, searchTerm);
    if (!books) {
      books = [];
    }
    return searchTerm === ''
      ? books
      : books.filter(
          (book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.abstract?.toLowerCase().includes(searchTerm.toLowerCase())
        );
  }
}
