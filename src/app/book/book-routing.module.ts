import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book.component';
import { LeaveGuard } from './leave.guard';
import { NewBookComponent } from './new-book/new-book.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'new',
    component: NewBookComponent,
  },
  {
    path: ':isbn',
    component: BookDetailsComponent,
    canDeactivate: [LeaveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
