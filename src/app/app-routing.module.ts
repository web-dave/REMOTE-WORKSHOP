import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/books',
  },
  {
    path: 'books',
    component: BookComponent,
  },
  {
    path: 'books/details/:isbn',
    component: BookDetailsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
