import { Injectable, OnDestroy } from '@angular/core';
import { IUser } from './user.interface';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';
import { HttpClient } from '@angular/common/http';
import { map, takeUntil, tap } from 'rxjs/operators';

interface IMsg {
  message: 'user_deleted' | 'user_created' | 'user_changed' | 'Hallo';
  value: IUser | number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private users: IUser[] = [];
  private end$ = new Subject();
  public users$ = new BehaviorSubject<IUser[]>(this.users);
  public userSocket$$ = new WebSocketSubject<IMsg | string>(
    'ws://fms.dresearch-fe.de:8080/webSocket'
  );
  constructor(private http: HttpClient) {
    this.userSocket$$.pipe(takeUntil(this.end$)).subscribe((data: IMsg) => {
      switch (data.message) {
        case 'user_changed':
          this.changeUser(data.value as IUser);
          break;
        case 'user_created':
          this.addUser(data.value as IUser);
          break;
        case 'user_deleted':
          this.removeUser(data.value as number);
          break;
      }
    });
  }
  removeUser(id: number) {
    this.users = this.users.filter((u) => u.id !== id);
    this.emitUsers();
  }
  addUser(user: IUser) {
    this.users.push(user);
    this.emitUsers();
  }
  changeUser(user: IUser) {
    const index = this.users.map((u) => u.id).indexOf(user.id);
    this.users.splice(index, 1, user);
    this.emitUsers();
  }

  emitUsers() {
    this.users$.next(this.users);
  }

  ngOnDestroy() {
    this.end$.next();
  }

  initUserList() {
    this.getUsers()
      .pipe(takeUntil(this.end$))
      .subscribe((data) => {
        this.users = data;
        this.emitUsers();
      });
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(
      'http://fms.dresearch-fe.de:8080/api/auth/user'
    );
  }

  getUser(userId: number): Observable<IUser> {
    return this.users$.pipe(
      map((users: IUser[]) => users.filter((u) => u.id === userId)[0] || null)
    );
  }
  updateOrSaveUser(user: IUser): Observable<IUser> {
    let request = this.http.put<IUser>(
      'http://fms.dresearch-fe.de:8080/api/free/user',
      user
    );
    if (user.id === -1) {
      delete user.id;
      request = this.http.post<IUser>(
        'http://fms.dresearch-fe.de:8080/api/free/user',
        user
      );
    }
    return request;
  }
}
