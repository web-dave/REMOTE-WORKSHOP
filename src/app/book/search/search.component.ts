import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() term: string = '';
  @Output() termChange = new EventEmitter<string>();

  // Parent Injectortoken trick 17.5
  // constructor(@Optional() parent: BookCardComponent) {}

  ngOnInit(): void {}

  updateSearch(event: Event) {
    this.termChange.emit((event.target as HTMLInputElement).value);
  }
}
