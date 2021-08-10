import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { FilterBooksPipe } from './pipes/filter-books.pipe';

@NgModule({
  declarations: [BookComponent, BookCardComponent, FilterBooksPipe],
  imports: [CommonModule],
  exports: [BookComponent],
})
export class BookModule {}
