import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { NavigationComponent } from './navigation/navigation.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import { StoreModule } from '@ngrx/store';

// app.module.ts

// Add:
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    AboutModule, 
    HttpClientModule,
    StoreModule.forRoot({}),

    // Add: 
    StoreDevtoolsModule.instrument({ maxAge: 100 })

  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
