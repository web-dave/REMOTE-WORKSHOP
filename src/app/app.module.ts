import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookCardComponent } from './book-card/book-card.component';
import { FilterBooksPipe } from './pipes/filter-books.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    FilterBooksPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
