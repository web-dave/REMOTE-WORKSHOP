import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BooksModule } from './books/books.module';
import { AboutModule } from './about/about.module';
import { Router } from '@angular/router';

@NgModule({
  declarations: [AppComponent, TopNavComponent],
  imports: [BrowserModule, AppRoutingModule, AboutModule, BooksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
