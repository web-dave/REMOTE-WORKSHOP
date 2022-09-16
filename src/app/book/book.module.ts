import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { FilterBooksPipe } from './filter-books.pipe';
import { BookCardComponent } from './book-card/book-card.component';

@NgModule({
  declarations: [BookComponent, FilterBooksPipe, BookCardComponent],
  imports: [CommonModule],
  exports: [BookComponent],
})
export class BookModule {}
