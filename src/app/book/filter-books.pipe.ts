import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './book.interface';

@Pipe({
  name: 'filterBooks',
})
export class FilterBooksPipe implements PipeTransform {
  transform(books: IBook[] = [], searchTerm: string = ''): IBook[] {
    console.log('PIPE', searchTerm);
    return books.filter(
      (book) =>
        book.author?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
