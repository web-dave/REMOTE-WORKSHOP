import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { InOutComponent } from './users/in-out/out-in.component';
import { IntInterceptorProviders } from './int.interceptor';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [AppComponent, TopNavComponent, InOutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AboutModule,
    LoginModule,
  ],
  providers: [IntInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
