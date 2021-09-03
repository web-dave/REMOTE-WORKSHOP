import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './book.interface';

@Pipe({
  name: 'filterBooks',
})
export class FilterBooksPipe implements PipeTransform {
  transform(books: IBook[] | null = [], searchStr: string = ''): IBook[] {
    if (searchStr === '') {
      return books || [];
    }
    if (!books) {
      return [];
    }
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchStr.toLowerCase()) ||
        book.abstract?.toLowerCase().includes(searchStr.toLowerCase())
    );
  }
}
