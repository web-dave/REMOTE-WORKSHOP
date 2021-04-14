import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SelfiePipe } from './shared/selfie.pipe';


@NgModule({
  declarations: [BooksComponent, BookListComponent, BookPreviewComponent, BookDetailsComponent, SelfiePipe],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  exports: [BooksComponent]
})
export class BooksModule { }
