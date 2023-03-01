import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

export const approutes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./books/books.module').then((datei) => datei.BooksModule),
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
