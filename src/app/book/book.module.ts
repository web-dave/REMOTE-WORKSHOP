import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { FilterBooksPipe } from './pipes/filter-books.pipe';
import { BookRoutingModule } from './book-routing.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BookNewComponent } from './book-new/book-new.component';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    FilterBooksPipe,
    BookDetailsComponent,
    BookNewComponent,
    BookEditComponent,
  ],
  imports: [CommonModule, BookRoutingModule, ReactiveFormsModule, FormsModule],
  exports: [BookComponent],
})
export class BookModule {}
