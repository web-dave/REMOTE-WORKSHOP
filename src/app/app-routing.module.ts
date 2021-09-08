import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  NoPreloading,
  PreloadAllModules,
} from '@angular/router';
import { MyPreloadingStategy } from './my-preloading.stagetgy';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
    data: {
      preload: true,
      delay: 3000,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: MyPreloadingStategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
