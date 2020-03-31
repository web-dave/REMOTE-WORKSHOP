import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hurz-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  name = 'Das Lamm';
  constructor() {}

  ngOnInit(): void {}
}
