import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'ng-sw-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  show = true;
  i = 0;
  constructor(private service: UserService, private auth: AuthService) {}

  ngOnInit(): void {
    this.service.initUserList();
  }
  logout() {
    this.auth.logout();
  }
}
