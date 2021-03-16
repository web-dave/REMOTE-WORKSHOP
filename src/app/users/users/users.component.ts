import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-sw-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  show = true;
  i = 0;
  constructor() {}

  karl(n: number) {
    console.log('karl');
    return 'I ist: ' + n;
  }

  ngOnInit(): void {
    setInterval(() => (this.i = 81), 1500);
  }
}
