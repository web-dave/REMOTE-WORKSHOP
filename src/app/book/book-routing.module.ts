import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { ConfirmLeaveGuard } from './confirm-leave.guard';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';

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
  {
    path: 'edit/:isbn',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
