import { NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanDeactivateFn,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BooksComponent } from './books.component';

const enterGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  console.log(route, state);
  return window.confirm('Echt jetzt?');
};

const leaveGuard: CanDeactivateFn<BookNewComponent> = (
  component: BookNewComponent
) => (component.isSaved() ? true : window.confirm('Echt jetzt?'));

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: '',
        component: BookListComponent,
      },
      {
        path: 'new',
        component: BookNewComponent,
        canDeactivate: [leaveGuard],
      },
      {
        path: ':isbn',
        component: BookDetailsComponent,
        // canActivate: [enterGuard],
      },
      {
        path: ':isbn/edit',
        component: BookEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
