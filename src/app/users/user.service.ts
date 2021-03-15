import { Injectable } from '@angular/core';
import { IUser } from './user.interface';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: IUser[] = [
    {
      id: 1,
      firstname: 'Max',
      lastname: 'Mustermann',
      account: 'max',
      password: 'first',
      enabled: true,
      rights: [],
    },
    {
      id: 2,
      firstname: 'Maria',
      lastname: 'Hilft',
      account: 'marie',
      password: 'first',
      enabled: true,
      rights: [],
    },
  ];
  constructor() {}
  getUsers(): Observable<IUser[]> {
    return of(this.users);
  }
}
