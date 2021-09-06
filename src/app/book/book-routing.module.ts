import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'books',
    component: BookComponent,
  },
  {
    path: 'books/details/:isbn',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
