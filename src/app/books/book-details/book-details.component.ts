import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(BookService);
  book?: IBook;
  keys: string[] = [];

  ngOnInit(): void {
    const isbn: string = this.route.snapshot.params['isbn'];
    this.service.getOne(isbn).subscribe((data) => {
      this.keys = Object.values(data);
      this.book = data;
    });
  }
}
