import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BookComponent } from './book.component';
import { SearchComponent } from './search/search.component';
import { BookSearchPipe } from './shared/book-search.pipe';
import { AsyncBookSearchPipe } from './shared/async-book-search.pipe';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { BookRoutingModule } from './book-routing.module';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookCardComponent,
    BookSearchPipe,
    SearchComponent,
    BookComponent,
    AsyncBookSearchPipe,
    DetailsComponent,
    ListComponent,
    EditComponent,
  ],
  imports: [CommonModule, BookRoutingModule, FormsModule],
  exports: [BookComponent],
})
export class BookModule {}
