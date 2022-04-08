import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() searchTerm = '';
  @Output() searchTermChange = new EventEmitter<string>();
  updateSerachTerm(e: Event) {
    this.searchTermChange.emit((e.target as HTMLInputElement).value || '');
  }
}
