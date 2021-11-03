import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './pipes/book-filter.pipe';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    BookFilterPipe,
    SearchComponent,
    ListComponent,
  ],
  imports: [CommonModule],
  exports: [BookComponent],
})
export class BookModule {}
