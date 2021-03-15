import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [UsersComponent, UserListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
