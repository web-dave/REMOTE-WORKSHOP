import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent implements OnInit {
  @Input() content: IBook = {
    title: '',
    author: '',
    abstract: '',
    subtitle: '',
    isbn: '',
    numPages: 0,
    publisher: '',
    price: '',
    cover: '',
  };
  @Output() goto = new EventEmitter<IBook>();
  color = 'hotpink';
  styles = {
    textShadow: '2pt 2pt #456789',
  };
  date = new Date();

  ngOnInit(): void {}

  myFunk(ev: MouseEvent) {
    console.log(ev);
    this.goto.emit(this.content);
    // this.content.title += ev.x;
  }
}
