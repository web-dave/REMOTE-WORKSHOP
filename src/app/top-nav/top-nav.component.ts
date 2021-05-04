import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zeiss-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  path = {
    about: 'about',
    books: 'books',
  };
  constructor() {}

  ngOnInit(): void {}
}
