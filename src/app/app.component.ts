import { Component } from '@angular/core';
import * as foo from './foo';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    {{ baz }}
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookmonkey-client!!!';
  foo = foo.foo;
  baz = foo.bar();
}
