import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IBook } from 'src/models/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit, AfterViewChecked {
  @Input() content: IBook = { title: '', author: '', abstract: '' };
  @Output() bookSelected = new EventEmitter<IBook>();
  customStyles = {
    backgroundColor: 'hotpink',
    color: 'purple',
  };
  constructor(private cdr: ChangeDetectorRef) {}
  ngAfterViewChecked(): void {
    // this.content.title += '!';
    // this.cdr.detectChanges();
  }

  ngOnInit(): void {}

  handleEvent(e: Event) {
    console.log(e.target as HTMLButtonElement);
    this.bookSelected.emit(this.content);
  }
}
