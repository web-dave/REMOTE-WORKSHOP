import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { SearchComponent } from './search/search.component';
import { BookComponent } from './book.component';
import { BookRoutingModule } from './book-routing.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NewBookComponent } from './new-book/new-book.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookCardComponent,
    BookFilterPipe,
    SearchComponent,
    BookComponent,
    BookDetailsComponent,
    NewBookComponent,
  ],
  exports: [BookComponent],
  imports: [CommonModule, BookRoutingModule, ReactiveFormsModule],
  providers: [],
})
export class BookModule {}
