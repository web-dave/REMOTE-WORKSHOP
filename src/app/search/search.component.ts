import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() search = '';
  @Output() searchChange = new EventEmitter<string>();
  searchBook(ev: Event) {
    this.search = (ev.target as HTMLInputElement).value;
    this.searchChange.emit(this.search);
  }
}
