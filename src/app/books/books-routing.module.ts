import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BooksComponent } from './books.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: '',
        component: BookListComponent,
        canActivate: [AuthGuard],
        data: { cred: 1 },
      },
      {
        path: 'new',
        component: BookNewComponent,
        canActivate: [AuthGuard],
        data: { cred: 3 },
      },
      {
        path: ':isbn',
        component: BookDetailsComponent,
        canActivate: [AuthGuard],
        data: { cred: 2 },
      },
      {
        path: ':isbn/edit',
        component: BookEditComponent,
        canActivate: [AuthGuard],
        data: { cred: 3 },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
