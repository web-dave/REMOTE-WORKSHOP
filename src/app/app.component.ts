import { Component } from '@angular/core';

@Component({
  selector: 'ng-ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'remote-workshop';
  reciveMyTitle(e: string) {
    console.log(e);
    return 'lkgfosafgaosf'
  }
}
