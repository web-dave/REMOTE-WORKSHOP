import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component';
import { StoreModule } from '@ngrx/store';
import { booksStoreName } from './+state/books.store';
import { booksReducer } from './+state/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './+state/books.actions';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(booksStoreName, booksReducer),
    EffectsModule.forFeature([BookEffects]),
    // StoreModule.forFeature({booksStoreName: booksReducer}),
  ],
  declarations: [
    BooksComponent,
    BookListComponent,
    BookDetailsComponent,
    BookEditComponent,
    BookNewComponent,
  ],
  exports: [BooksComponent, BookListComponent],
})
export class BooksModule {}
