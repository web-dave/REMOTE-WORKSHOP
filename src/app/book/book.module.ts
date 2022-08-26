import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { FilterBooksPipe } from './filter-books.pipe';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  declarations: [BookComponent, BookCardComponent, FilterBooksPipe, BookDetailsComponent],
  imports: [CommonModule],
  exports: [BookComponent],
})
export class BookModule {}
