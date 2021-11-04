import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/books',
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./book/book.module').then((esm) => esm.BookModule),
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
