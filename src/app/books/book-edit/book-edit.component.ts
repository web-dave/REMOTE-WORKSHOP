import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent {
  private route = inject(ActivatedRoute);
  private service = inject(BookService);
  book$!: Observable<IBook>;

  ngOnInit(): void {
    const isbn: string = this.route.snapshot.params['isbn'];
    this.book$ = this.service.getOne(isbn);
  }

  save(book: IBook) {
    this.service.updateOne(book).subscribe();
  }
}
