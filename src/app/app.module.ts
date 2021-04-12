import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AboutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
