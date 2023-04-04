import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [AppComponent, TopNavComponent],
  imports: [BrowserModule, AppRoutingModule, BooksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
