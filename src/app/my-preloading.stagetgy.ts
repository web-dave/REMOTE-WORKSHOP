import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MyPreloadingStategy implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    console.log(route);
    if (route.data?.preload) {
      return of(true).pipe(
        delay(route.data.delay),
        switchMap(() => fn())
      );
    } else {
      return of(false);
    }
  }
}
