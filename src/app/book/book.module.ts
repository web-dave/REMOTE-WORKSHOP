import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { FilterBooksPipe } from './pipes/filter-books.pipe';
import { BookRoutingModule } from './book-routing.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookNewComponent } from './book-new/book-new.component';

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    FilterBooksPipe,
    BookDetailsComponent,
    BookNewComponent,
  ],
  imports: [CommonModule, BookRoutingModule, ReactiveFormsModule],
  exports: [BookComponent],
})
export class BookModule {}
