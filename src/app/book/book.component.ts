import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IBook } from './book.interface';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  searchTerm: string = '';

  books$: Observable<IBook[]> = this.service.getBooks();

  constructor(
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  navigateToDetails(b: IBook) {
    console.table(b);
    this.router.navigate(['detail', b.isbn], { relativeTo: this.route });
  }

  updateSearchTerm(input: Event) {
    this.searchTerm = (input.target as HTMLInputElement).value;
  }
}
