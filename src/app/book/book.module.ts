import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BookComponent } from './book.component';
import { SearchComponent } from './search/search.component';
import { BookSearchPipe } from './shared/book-search.pipe';

@NgModule({
  declarations: [
    BookCardComponent,
    BookSearchPipe,
    SearchComponent,
    BookComponent,
  ],
  imports: [CommonModule],
  exports: [BookComponent],
})
export class BookModule {}
