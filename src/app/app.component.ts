import { Component } from '@angular/core';
import { IBook } from './book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookmankey-client';
  book: IBook = {
    title: 'Moby Click',
    author: 'Hurz',
    abstract: 'Click, puff, paff...',
  };

  goToDetails(b: IBook) {
    console.table(b);
  }
}
