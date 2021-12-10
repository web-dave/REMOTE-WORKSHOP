import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from './book/book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  constructor(private router: Router) {}
}
