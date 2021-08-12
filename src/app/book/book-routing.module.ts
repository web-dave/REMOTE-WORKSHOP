import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookComponent } from './book.component';
import { ConfirmLeaveGuard } from './confirm-leave.guard';
const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'details/:isbn',
    component: BookDetailsComponent,
    canDeactivate: [ConfirmLeaveGuard],
    canActivate: [ConfirmLeaveGuard],
  },
  {
    path: 'new',
    component: BookNewComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
