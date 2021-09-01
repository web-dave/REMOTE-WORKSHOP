import { Component } from '@angular/core';
import * as foo from './foo';

@Component({
  selector: 'app-root',
  template: `
    <app-book-card></app-book-card>
    <app-book-card></app-book-card>
    <app-book-card></app-book-card>
    <app-book-card></app-book-card>
    <app-book-card></app-book-card>
    <app-book-card></app-book-card>
    <app-book-card></app-book-card>
    <app-book-card></app-book-card>
    <app-book-card></app-book-card>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookmonkey-client!!!';
  foo = foo.foo;
  baz = foo.bar();
}
