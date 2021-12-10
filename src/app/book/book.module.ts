import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { SearchComponent } from './search/search.component';
import { BookComponent } from './book.component';
import { BookRoutingModule } from './book-routing.module';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  declarations: [
    BookCardComponent,
    BookFilterPipe,
    SearchComponent,
    BookComponent,
    BookDetailsComponent,
  ],
  exports: [BookComponent],
  imports: [CommonModule, BookRoutingModule],
  providers: [],
})
export class BookModule {}
