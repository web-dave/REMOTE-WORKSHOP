import { Component } from '@angular/core';
import { IBook } from './book/book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookmankey-client';
}
