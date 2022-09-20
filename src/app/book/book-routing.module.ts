import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book.component';
import { ConfirmLeaveGuard } from './confirm-leave.guard';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'detail/:isbn',
    component: BookDetailComponent,
    canDeactivate: [ConfirmLeaveGuard],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
