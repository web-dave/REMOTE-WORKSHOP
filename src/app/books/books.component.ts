import { Component } from '@angular/core';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  providers: [],
  imports: [
    BookListComponent,
    BookPreviewComponent,
    BookDetailsComponent,
    BookEditComponent,
    BookNewComponent,
  ],
  standalone: true,
})
export class BooksComponent {
  books: any;
}
