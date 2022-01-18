import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book.component';
import { LeaveGuard } from './leave.guard';

const routes: Routes = [
  { path: '', component: BookComponent },
  {
    path: 'details/:isbn',
    component: BookDetailComponent,
    data: { name: 'Hallo Welt' },
    canDeactivate: [LeaveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
