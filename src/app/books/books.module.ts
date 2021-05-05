import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookService } from './book.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { PagesPipe } from './pages.pipe';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookNewComponent } from './book-new/book-new.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookPreviewComponent,
    BookDetailsComponent,
    PagesPipe,
    BookEditComponent,
    BookNewComponent,
  ],
  imports: [CommonModule, BooksRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [BooksComponent],
})
export class BooksModule {}
