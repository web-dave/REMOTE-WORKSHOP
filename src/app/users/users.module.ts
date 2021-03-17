import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './user-list/user-list.component';
import { KarlPipe } from './karl.pipe';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, UserListComponent, KarlPipe, EditComponent],
  imports: [CommonModule, UsersRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [UsersComponent],
})
export class UsersModule {}
