import { Component } from '@angular/core';

@Component({
  selector: 'ng-sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'remote-workshop';
  reciveMyTitle(e: string) {
    console.log(e);
  }
}
