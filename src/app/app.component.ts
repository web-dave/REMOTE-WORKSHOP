import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookmankey-client';
  book = {
    title: 'Moby Click',
    author: 'Hurz',
    abstract: 'Click, puff, paff...',
  };
}
