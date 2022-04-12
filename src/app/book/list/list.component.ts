import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, NEVER } from 'rxjs';
import { IBook } from 'src/models/book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  searchTerm = '';
  books$: Observable<IBook[]> = NEVER;

  constructor(
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.books$ = this.service.getBooks();
  }

  goToBook(e: IBook) {
    this.router.navigate([e.isbn], { relativeTo: this.route });
  }
}
