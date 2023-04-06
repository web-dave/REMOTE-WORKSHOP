import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { TrComponent } from './tr/tr.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { MorsePipe } from './morse.pipe';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookPreviewComponent,
    TrComponent,
    BookDetailsComponent,
    MorsePipe,
    BookEditComponent,
  ],
  exports: [BooksComponent],
  imports: [CommonModule, BooksRoutingModule, FormsModule],
})
export class BooksModule {}
