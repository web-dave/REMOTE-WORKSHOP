import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, AboutComponent, NavigationComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
