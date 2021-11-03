import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Sanitizer,
} from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit, AfterViewChecked {
  @Input() content: IBook = { abstract: '', title: '', author: '' };
  @Output() navigateTo = new EventEmitter<IBook>();
  x: number = 42;

  styling = {
    color: 'purple',
  };

  btn = '<button>click</button>';

  myClass = true;

  constructor(private snitizer: Sanitizer, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      // this.content.title = 'öxkjvhödjfhka';
    }, 1500);
  }

  ngAfterViewChecked() {
    // setTimeout(() => (this.x = 7), 0);
    // this.x = 7;
    // this.cdr.detectChanges();
  }

  handleDetailClick(event: MouseEvent) {
    console.log('EVNET:', event);
    this.x = event.x;
    this.navigateTo.emit(this.content);
  }
}
