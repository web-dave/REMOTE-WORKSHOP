import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() searchTerm = '';
  @Output() searchTermChange = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  updateSearchTerm(input: Event) {
    this.searchTerm = (input.target as HTMLInputElement).value;
    this.searchTermChange.emit(this.searchTerm);
  }

  // pure function
  add(a: number, b: number) {
    return a + b;
  }
}
