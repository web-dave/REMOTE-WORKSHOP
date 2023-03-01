import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NavComponent, RouterOutlet]
})
export class AppComponent {
  title = 'angular-workshop';
  constructor() {
    console.log(new Date());
  }
}
