import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      validationMessages: [{ name: 'email', message: 'I-MAIL ist falsch' }],
    }),
  ],
})
export class AboutModule {}
