import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'remote-workshop';
  constructor() {
    console.log('===>');
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.title += ' @ SAB';
    }, 2000);
  }
  reciveMyTitle(e: string) {
    console.log(e);
  }
}
