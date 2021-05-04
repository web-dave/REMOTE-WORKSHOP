import { Component, OnInit } from '@angular/core';
import { BookService } from '../books/book.service';
@Component({
  selector: 'zeiss-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.service.name = 'HannaH';
  }
}
