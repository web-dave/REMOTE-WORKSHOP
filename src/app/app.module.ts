import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { AboutModule } from './about/about.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { InOutComponent } from './in-out/in-out.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    InOutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, UsersModule, AboutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
