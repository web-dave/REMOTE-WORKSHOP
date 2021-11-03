import { Component, Input } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() filteredBooks: IBook[] = [];
}
