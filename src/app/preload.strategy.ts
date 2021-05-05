import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
interface NetworkInformation {
  downlink: number;
  effectiveType: '4g' | '2g' | '3g';
  onchange: any;
  rtt: number;
  saveData: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class NetworkPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    const network: NetworkInformation = navigator['connection'];
    console.log(network.effectiveType);
    if (network.effectiveType === '2g') {
      return fn();
    } else {
      return of(null);
    }
  }
}
