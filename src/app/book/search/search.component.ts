import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent, NEVER, Observable } from 'rxjs';
import { debounceTime, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit {
  @Input() term: string = '';
  @Output() termChange = new EventEmitter<string>();

  @ViewChild('input') input: any;

  foo$: Observable<string> = NEVER;

  ngAfterViewInit(): void {
    console.log(this.input.nativeElement);
    this.foo$ = fromEvent(this.input.nativeElement, 'input').pipe(
      debounceTime(300),
      pluck('target', 'value')
    );

    this.foo$.subscribe((data) => this.updateSearch(data));
  }

  updateSearch(value: string) {
    this.termChange.emit(value);
  }
}
