import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './books/book-list/book-list.component';

const routes: Routes = [
  {
    title: 'Book Store',
    path: 'books',
    component: BooksComponent,
    children: [
      {
        path: '',
        component: BookListComponent,
      },
    ],
  },
  { title: 'who am I', path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
