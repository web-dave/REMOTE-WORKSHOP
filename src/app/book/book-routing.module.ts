import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'detail/:isbn',
    component: BookDetailComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
