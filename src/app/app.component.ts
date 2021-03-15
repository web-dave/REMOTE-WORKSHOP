import { Component } from '@angular/core';

@Component({
  selector: 'ng-ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'remote-workshop';
  hurz = false;
  mate!: { x: number; y: number };
  reciveMyTitle(e: string) {
    console.log(e);
    return 'lkgfosafgaosf';
  }
  setMate(data: { x: number; y: number }) {
    console.log(data);

    this.mate = data;
  }
}
