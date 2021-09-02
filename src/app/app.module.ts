import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookCardComponent } from './book-card/book-card.component';
import { FilterBooksPipe } from './filter-books.pipe';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    FilterBooksPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
