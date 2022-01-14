import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './book.interface';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  transform(books: IBook[], searchString: string): IBook[] {
    console.log('PIPE', searchString);
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchString.toLowerCase())
    );
  }
}
