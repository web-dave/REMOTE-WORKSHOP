import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SelfiePipe } from './shared/selfie.pipe';
import { BookNewComponent } from './book-new/book-new.component';
import { StoreModule } from '@ngrx/store';
import { bookListReducer } from './redux/books.reducer';
import { FavModule } from './fav/fav.module';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './redux/book.effects';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookPreviewComponent,
    BookDetailsComponent,
    SelfiePipe,
    BookNewComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('booklist', bookListReducer),
    EffectsModule.forFeature([BookEffects]),
    FavModule,
  ],
  exports: [BooksComponent],
})
export class BooksModule {}
