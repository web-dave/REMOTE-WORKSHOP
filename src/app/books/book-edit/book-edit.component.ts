import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
  standalone: true,
})
export class BookEditComponent implements OnInit {
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

  saveBook() {
    if (this.book) {
      this.bookService.updateBook(this.book).subscribe({
        next: () => this.router.navigate(['..'], { relativeTo: this.route }),
      });
    }
  }
}
