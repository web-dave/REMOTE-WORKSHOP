import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./book/book.module').then((datei) => datei.BookModule),
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
