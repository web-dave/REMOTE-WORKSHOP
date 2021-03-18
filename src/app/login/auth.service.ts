import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { endpoints } from 'src/environments/environment';

const AUTH_API = 'http://fms.dresearch-fe.de:8080/login';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http
      .post(endpoints.auth, 'username=' + username + '&password=' + password, {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
        observe: 'response',
        withCredentials: true,
      })
      .pipe(tap((resp) => console.log(resp.headers.get('Set-Cookie'))));
  }

  logout() {
    this.signOut();
    this.http
      .get('http://217.228.63.99:18081/logout')
      .subscribe(() => this.router.navigate(['/about']));
  }
  signOut(): void {
    window.sessionStorage.clear();
  }

  saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
