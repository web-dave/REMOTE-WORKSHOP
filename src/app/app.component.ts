import { Component } from '@angular/core';
import { NEVER, Observable } from 'rxjs';
import { MsgService } from './msg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  show = true;
  messages: Observable<string> = NEVER;
  constructor(private msg: MsgService) {
    this.messages = this.msg.messages;
  }
}
