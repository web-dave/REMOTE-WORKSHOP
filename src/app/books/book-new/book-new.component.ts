import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BooksService } from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../book';

@Component({
  selector: 'hurz-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {
  form: FormGroup;
  constructor(
    private service: BooksService,
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      title: ['', [Validators.required]],
      subtitle: ['', []],
      isbn: ['', []],
      abstract: ['', []],
      numPages: [0, []],
      author: ['', []],
      publisher: this.builder.group({
        name: ['', []],
        url: ['', []]
      })
    });
  }

  save() {
    this.service
      .createBook(this.form.value)
      .subscribe((book: IBook) =>
        this.router.navigate(['..', book.isbn], { relativeTo: this.route })
      );
  }
}
