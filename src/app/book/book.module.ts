import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { FilterBooksPipe } from './filter-books.pipe';
import { SearchComponent } from './search/search.component';
import { BookRoutingModule } from './book-routing.module';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewBookComponent } from './new-book/new-book.component';

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    FilterBooksPipe,
    SearchComponent,
    DetailsComponent,
    EditComponent,
    NewBookComponent,
  ],
  imports: [CommonModule, FormsModule, BookRoutingModule, ReactiveFormsModule],
  exports: [BookComponent],
})
export class BookModule {}
