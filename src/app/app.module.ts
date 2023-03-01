import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { AboutModule } from './about/about.module';
APP_INITIALIZER;

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, AboutModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        // get data
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
