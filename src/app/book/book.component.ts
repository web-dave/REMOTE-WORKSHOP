import { Component } from '@angular/core';
import { IBook } from './book.interface';
import { BookService } from './book.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  searchStr = '';
  show = true;
  books$: Observable<IBook[]> = this.service.getAll();

  constructor(
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  goToDetails(b: IBook) {
    this.router.navigate([b.isbn], { relativeTo: this.route });
    // this.router.navigate(['details', b.isbn], { relativeTo: this.route });
  }

  updateSearchString(e: Event) {
    this.searchStr = (e.target as HTMLInputElement).value;
  }
}
