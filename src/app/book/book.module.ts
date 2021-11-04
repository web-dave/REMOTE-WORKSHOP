import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './pipes/book-filter.pipe';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { BookRoutingModule } from './book-routing.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookApiService } from './book-api.service';

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    BookFilterPipe,
    SearchComponent,
    ListComponent,
    BookDetailsComponent,
  ],
  imports: [CommonModule, BookRoutingModule],
  exports: [BookComponent],
  providers: [BookApiService],
})
export class BookModule {}
