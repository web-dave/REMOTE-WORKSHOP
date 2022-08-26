import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { BookComponent } from './book/book.component';
const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'books',
    component: BookComponent,
  },
  {
    path: 'books/:isbn',
    component: BookDetailsComponent,
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
