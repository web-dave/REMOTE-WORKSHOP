import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'details/:isbn',
    component: BookDetailsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
