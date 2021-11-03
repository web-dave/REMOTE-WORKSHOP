import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() filteredBooks: IBook[] = [];
  constructor() {}

  ngOnInit(): void {}
}
