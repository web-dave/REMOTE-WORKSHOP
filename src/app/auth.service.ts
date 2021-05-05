import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private cred = new BehaviorSubject<number>(0);
  public creds$ = this.cred.asObservable();
  constructor() {
    console.log('=====> AuthService');
    this.cred.next(2);
  }
}
