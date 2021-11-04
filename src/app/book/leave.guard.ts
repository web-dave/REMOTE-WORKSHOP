import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BookDetailsComponent } from './book-details/book-details.component';

@Injectable({
  providedIn: 'root',
})
export class LeaveGuard implements CanDeactivate<BookDetailsComponent> {
  canDeactivate(
    component: BookDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(component, currentRoute, currentState, nextState);
    return confirm("Nooooo! Don't leave!!!!!");
  }
}
