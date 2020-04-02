import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  declarations: [BooksComponent, BookListComponent, BookDetailsComponent],
  exports: [BooksComponent, BookListComponent],
  imports: [CommonModule, BooksRoutingModule]
})
export class BooksModule {}
