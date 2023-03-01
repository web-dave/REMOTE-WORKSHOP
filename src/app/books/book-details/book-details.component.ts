import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
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
    setInterval(() => {
      if (this.book) this.book.price = '7.00';
    }, 2000);
    this.route.params.subscribe((params) => {
      this.bookService
        .getBook(params['isbn'])
        .pipe(map((wert) => ({ ...wert, price: wert.price.substring(1) })))
        .subscribe({
          next: (b) => (this.book = b),
          error: (e) => {
            this.router.navigate(['..']);
          },
        });
    });
  }
  format(wert: string): string {
    console.log('methode ==>', wert);
    return '$ ' + wert;
  }
}
