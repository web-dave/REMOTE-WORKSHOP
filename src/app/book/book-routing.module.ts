import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookComponent } from './book.component';
import { ConfirmLeaveGuard } from './confirm-leave.guard';

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
    path: 'detail/:isbn',
    component: BookDetailComponent,
    canDeactivate: [ConfirmLeaveGuard],
  },
  {
    path: 'edit/:isbn',
    component: BookEditComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
