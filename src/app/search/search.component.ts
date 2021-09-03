import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  template: '<input (input)="searchBook($event)" />',
})
export class SearchComponent {
  @Input() search = '';
  @Output() searchChange = new EventEmitter<string>();
  searchBook(ev: Event) {
    this.search = (ev.target as HTMLInputElement).value;
    this.searchChange.emit(this.search);
  }
}
