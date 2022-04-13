import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DetailsComponent } from './details/details.component';

@Injectable({
  providedIn: 'root',
})
export class StayGuard implements CanDeactivate<DetailsComponent> {
  canDeactivate(
    component: DetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    console.log(component);
    return window.confirm('Nooooooo! plz stay :/');
  }
}
