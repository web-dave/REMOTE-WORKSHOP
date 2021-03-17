import { Injectable } from '@angular/core';
import { IUser } from './user.interface';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) {}
  getUsers(): Observable<IUser[]> {
    // return of(this.users);
    return this.http.get<IUser[]>(
      'http://fms.dresearch-fe.de:8080/api/free/user'
    );
  }
  getUser(userId: string): Observable<IUser> {
    return this.http.get<IUser>(
      'http://fms.dresearch-fe.de:8080/api/free/user/' + userId
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
