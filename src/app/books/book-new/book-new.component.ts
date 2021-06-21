import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBook } from '../shared/book.interface';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'ng-sw-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  bookNewForm: FormGroup;
  constructor(private builder: FormBuilder, private service: BooksService) {}

  ngOnInit(): void {
    this.bookNewForm = this.builder.group({
      title: '',
      subtitle: '',
      isbn: ['', [Validators.required]],
      abstract: '',
      numPages: 0,
      author: '',
      cover: '',
      publisher: this.builder.group({
        name: '',
        url: '',
      }),
    });
  }

  save() {
    this.service.createBook(this.bookNewForm.value).subscribe();
  }
}
