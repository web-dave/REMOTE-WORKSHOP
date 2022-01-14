import { Component } from '@angular/core';
import { IBook } from './book/book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookmonkey-client';
  foo = 'Bar';

  // updateSearch(event: string) {
  //   this.search = event;
  // }

  // transform(books: IBook[], searchString: string): IBook[] {
  //   console.log('METHOD', searchString);
  //   return books.filter((book) =>
  //     book.title.toLowerCase().includes(searchString.toLowerCase())
  //   );
  // }
}
