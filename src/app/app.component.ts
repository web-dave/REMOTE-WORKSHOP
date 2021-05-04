import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'zeiss-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'zeiss';

  user = {
    name: 'Hanna',
  };
  constructor(public router: Router) {
    console.log(this.title, this.user);
    console.log(this.title + ' ' + this.user);

    setTimeout(() => {
      this.user.name = 'Hanah';
    }, 2000);
  }
}
