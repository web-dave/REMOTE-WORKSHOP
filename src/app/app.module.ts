import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { NavigationComponent } from './navigation/navigation.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, TopNavComponent],
  imports: [BrowserModule, HttpClientModule, AboutModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
