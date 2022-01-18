import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss'],
})
export class SearchBookComponent implements OnInit {
  @Input() search: string = '';
  @Input() info: string = '';
  @Output() searchChange = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  sendSearch(event: Event) {
    this.searchChange.emit((event.target as HTMLInputElement).value);
  }
}
