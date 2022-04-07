import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() content: any;
  customStyles = {
    backgroundColor: 'hotpink',
    color: 'purple',
  };
  constructor() {}

  ngOnInit(): void {}
}
