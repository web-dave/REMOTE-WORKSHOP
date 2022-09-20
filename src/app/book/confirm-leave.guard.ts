import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmLeaveGuard implements CanDeactivate<BookDetailComponent> {
  canDeactivate(
    component: BookDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    return window.confirm('Sicher?');
  }
}
