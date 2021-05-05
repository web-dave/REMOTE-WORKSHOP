import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable, of, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    console.log(route, state, route.data.cred);
    const cred: number = route.data.cred;
    console.log('====> Guard', this.auth.creds$.pipe(map((n) => cred <= n)));

    return this.auth.creds$.pipe(
      map((n) => {
        if (cred > n) {
          console.log('Computer sagt NEIN!');
        }
        return cred <= n;
      })
    );
  }
}
