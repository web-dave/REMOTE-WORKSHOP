import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    loadComponent: () =>
      import('./books/books.component').then((datei) => datei.BooksComponent),
  },
  // {
  //   path: ':username',
  //   component:AboutComponent
  // },
  // {
  //   path: ':userid',
  //   component:AboutComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
