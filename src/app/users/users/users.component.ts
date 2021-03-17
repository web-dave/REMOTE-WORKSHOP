import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'ng-sw-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  show = true;
  i = 0;
  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.initUserList();
  }
}
