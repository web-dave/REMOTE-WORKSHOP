import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './user-list/user-list.component';
import { KarlPipe } from './karl.pipe';


@NgModule({
  declarations: [UsersComponent, UserListComponent, KarlPipe],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
