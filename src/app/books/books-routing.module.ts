import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Routes = [
  {
    title: 'Book Store',
    path: '',
    component: BooksComponent,
    children: [
      {
        path: '',
        component: BookListComponent,
      },
      {
        path: ':isbn',
        component: BookDetailsComponent,
      },
      {
        path: ':isbn/edit',
        component: BookEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
