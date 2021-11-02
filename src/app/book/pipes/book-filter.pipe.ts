import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../book.interface';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  transform(books: IBook[] = [], search: string = ''): IBook[] {
    console.log('pipe', search);
    return books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  }
}
