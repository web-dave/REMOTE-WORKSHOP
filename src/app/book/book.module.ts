import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter.pipe';
import { SearchBookComponent } from './search-book/search-book.component';
import { BookRoutingModule } from './book-routing.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookNewComponent } from './book-new/book-new.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    BookFilterPipe,
    SearchBookComponent,
    BookDetailComponent,
    BookNewComponent,
  ],
  imports: [CommonModule, BookRoutingModule, ReactiveFormsModule],
  exports: [BookComponent],
})
export class BookModule {}
