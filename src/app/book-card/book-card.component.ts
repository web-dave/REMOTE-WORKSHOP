import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input()book: IBook = { title: '', author: '', abstract: '', isbn: '' };
foo!:IBook;

link="lonk"
  styling = {
    color: 'hotpink'
  }
  i = 1
  constructor() {
    
    setTimeout(()=>{this.i++;}, 500)
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
