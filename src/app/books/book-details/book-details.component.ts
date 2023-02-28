import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent {
  book: IBook | undefined;
  private bookService = inject(BookService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.bookService.getBook(params['isbn']).subscribe({
        next: (b) => (this.book = b),
        error: (e) => {
          this.router.navigate(['..']);
        },
      });
    });
  }
}
