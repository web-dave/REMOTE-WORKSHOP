import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { FilterBooksPipe } from './filter-books.pipe';
import { SearchComponent } from './search/search.component';
import { BookRoutingModule } from './book-routing.module';

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    FilterBooksPipe,
    SearchComponent,
  ],
  imports: [CommonModule, BookRoutingModule],
  exports: [BookComponent],
})
export class BookModule {}
