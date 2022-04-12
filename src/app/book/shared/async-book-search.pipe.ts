import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from 'src/models/book.interface';

@Pipe({
  name: 'asyncBookSearch',
})
export class AsyncBookSearchPipe implements PipeTransform {
  transform(
    value: Observable<IBook[]>,
    searchTerm: string
  ): Observable<IBook[]> {
    return value.pipe(
      map((books) => {
        return searchTerm === ''
          ? books
          : books.filter(
              (book) =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.abstract?.toLowerCase().includes(searchTerm.toLowerCase())
            );
      })
    );
  }
}
