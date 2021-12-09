import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../book.interface';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  transform(books: IBook[], searchTerm: string): IBook[] {
    console.log('pipe', searchTerm);
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
