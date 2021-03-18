import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IUser } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'ng-ws-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: Observable<IUser[]>;
  i = 77777;
  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.users$ = this.service.users$;
  }
  readUsers = (u) => {};

  sendMsg(msg: string) {
    // this.service.userSocket$$.next(msg);
  }
}
