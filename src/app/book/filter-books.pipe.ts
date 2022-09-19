import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './book.interface';

@Pipe({
  name: 'filterBooks',
})
export class FilterBooksPipe implements PipeTransform {
  transform(books: IBook[], searchStr: string): IBook[] {
    console.log('pipe', searchStr);
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchStr.toLowerCase())
    );
  }
}
