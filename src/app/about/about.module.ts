import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { MeComponent } from './me/me.component';

@NgModule({
  declarations: [AboutComponent, MeComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
