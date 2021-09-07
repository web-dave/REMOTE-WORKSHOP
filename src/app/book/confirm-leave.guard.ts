import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DetailsComponent } from './details/details.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmLeaveGuard implements CanDeactivate<DetailsComponent> {
  canDeactivate(
    component: DetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> {
    console.log(component, currentRoute, currentState, nextState);
    // return confirm('Sicher??');
    return of(true).pipe(delay(1500));
  }
}
