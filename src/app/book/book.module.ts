import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { SearchComponent } from './search/search.component';
import { BookComponent } from './book.component';

@NgModule({
  declarations: [
    BookCardComponent,
    BookFilterPipe,
    SearchComponent,
    BookComponent,
  ],
  exports: [BookComponent],
  imports: [CommonModule],
  providers: [],
})
export class BookModule {}
