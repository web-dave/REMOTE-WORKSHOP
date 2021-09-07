import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { ConfirmLeaveGuard } from './confirm-leave.guard';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'details/:isbn',
    component: DetailsComponent,
    canDeactivate: [ConfirmLeaveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
