import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class IntInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req;
    console.log(authReq);
    console.log(next);
    return next.handle(authReq).pipe(
      tap(console.log),

      catchError((error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 0) {
          this.router.navigate(['login']);
        }
        return throwError('ALARM');
      })
    );
  }
}

export const IntInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: IntInterceptor, multi: true },
];
