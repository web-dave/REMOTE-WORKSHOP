import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../book.interface';

@Pipe({
  name: 'filterBooks',
})
export class FilterBooksPipe implements PipeTransform {

  transform(books: IBook[], searchTerm: string): IBook[] {
    console.log('searchTerm', searchTerm,'Pipe');
    
    return books.filter((book: IBook) => book.title.includes(searchTerm) || book.author.includes(searchTerm))
  }

}
