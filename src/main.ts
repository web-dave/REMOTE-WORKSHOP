import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import {
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';
import { AboutModule } from './app/about/about.module';
import { approutes } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(approutes),
    importProvidersFrom(BrowserModule, AboutModule),
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));
