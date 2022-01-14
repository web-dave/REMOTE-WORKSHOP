import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter.pipe';
import { SearchBookComponent } from './search-book/search-book.component';

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    BookFilterPipe,
    SearchBookComponent,
  ],
  imports: [CommonModule],
  exports: [BookComponent],
})
export class BookModule {}
