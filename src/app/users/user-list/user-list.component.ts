import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IUser } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'ng-ws-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, OnDestroy {
  users: IUser[];
  sub1: Subscription;
  sub2 = new Subscription();
  end$ = new Subject<void>();
  constructor(private service: UserService) {}
  ngOnDestroy(): void {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.end$.next();
  }

  ngOnInit(): void {
    // 1. Weg
    this.sub1 = this.service.getUsers().subscribe(
      (data) => (this.users = data),
      (err) => console.error(err),
      () => console.log('DONE')
    );
    // 2. Weg
    this.sub2.add(
      this.service.getUsers().subscribe(
        (data) => (this.users = data),
        (err) => console.error(err),
        () => console.log('DONE')
      )
    );
    // 3. Weg
    this.service
      .getUsers()
      .pipe(takeUntil(this.end$))
      .subscribe(
        (data) => (this.users = data),
        (err) => console.error(err),
        () => console.log('DONE')
      );
  }
}
