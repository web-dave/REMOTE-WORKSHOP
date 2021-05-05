import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
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
    console.log('!!! =>', fn);
    if (network.effectiveType === '4g') {
      return fn();
    } else {
      return of(null);
    }
  }
}
