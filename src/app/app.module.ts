import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, AboutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
