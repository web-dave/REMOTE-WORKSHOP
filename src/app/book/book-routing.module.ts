import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookComponent } from './book.component';
import { LeaveGuard } from './leave.guard';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'new',
    component: BookNewComponent,
  },
  {
    path: ':isbn',
    component: BookDetailsComponent,
    canDeactivate: [LeaveGuard],
  },
  {
    path: ':isbn/edit',
    component: BookEditComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
