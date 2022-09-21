import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { FilterBooksPipe } from './filter-books.pipe';
import { BookCardComponent } from './book-card/book-card.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookRoutingModule } from './book-routing.module';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookComponent,
    FilterBooksPipe,
    BookCardComponent,
    BookDetailComponent,
    BookEditComponent,
  ],
  imports: [CommonModule, BookRoutingModule, FormsModule],
  exports: [BookComponent],
})
export class BookModule {}
