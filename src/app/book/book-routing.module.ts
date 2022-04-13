import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { StayGuard } from './stay.guard';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: ':isbn',
        component: DetailsComponent,
        canDeactivate: [StayGuard],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
