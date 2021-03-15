import { Component, OnInit } from '@angular/core';
import { IUser } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'ng-ws-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: IUser[];
  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      (data) => (this.users = data),
      (err) => console.error(err),
      () => console.log('DONE')
    );
  }
}
