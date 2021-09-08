import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MsgService {
  private data = new BehaviorSubject<string>('./.');
  messages = this.data.asObservable();
  constructor() {
    if (localStorage.getItem('msg')) {
      this.sendMsg(localStorage.getItem('msg') as string);
    }
  }

  sendMsg(msg: string) {
    this.data.next(msg);
    localStorage.setItem('msg', msg);
  }
}
