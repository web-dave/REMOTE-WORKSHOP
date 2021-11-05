import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(next);

    // req = req.clone({
    //   url: 'https://webdave.tv',
    // });
    console.log(req);

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        return throwError('Alarm');
      })
    );
  }
}
