import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './book.interface';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  transform(books: IBook[] | null, searchString: string): IBook[] {
    console.log('PIPE', searchString);
    if (!books) {
      books = [];
    }
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchString.toLowerCase())
    );
  }
}
