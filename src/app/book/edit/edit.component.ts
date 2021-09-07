import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, NEVER } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  book$: Observable<IBook> = NEVER;
  constructor(private service: BookService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.book$ = this.route.params.pipe(
      switchMap((params) => this.service.getBook(params.isbn))
    );
  }
}
