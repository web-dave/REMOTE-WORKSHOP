import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';

export class PreloadDelayed implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data !== undefined) {
      if (route.data.preload) {
        return of(true).pipe(
          delay(3000),
          flatMap(() => fn())
        );
      }
    } else {
      return fn();
    }
  }
}
