import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';

@Injectable({
  providedIn: 'root'
})
export class StayHereGuard implements CanDeactivate<BookListComponent> {
  canDeactivate(
    component: BookListComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    return confirm('Realy???');
  }
}
