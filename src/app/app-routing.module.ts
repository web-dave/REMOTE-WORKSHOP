import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNavComponent } from './top-nav/top-nav.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./books/books.module').then((esm) => esm.BooksModule),
  },
  // {
  //   path: '**',
  //   component: TopNavComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
