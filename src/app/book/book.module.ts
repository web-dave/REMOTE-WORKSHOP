import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { FilterBooksPipe } from './filter-books.pipe';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookRoutingModule } from './book-routing.module';

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    FilterBooksPipe,
    BookDetailsComponent,
  ],
  imports: [CommonModule, BookRoutingModule],
  exports: [BookComponent],
})
export class BookModule {}
