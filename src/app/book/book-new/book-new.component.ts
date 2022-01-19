import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { first } from 'rxjs/operators';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  bookForm!: FormGroup;
  foo = '54654654654';
  keys: string[] = [];
  checkboxes = ['ebook'];
  constructor(private builder: FormBuilder, private service: BookApiService) {}

  ngOnInit(): void {
    this.bookForm = this.builder.group({
      title: ['', [Validators.required]],
      subtitle: '',
      isbn: ['', [Validators.required]],
      abstract: '',
      numPages: 0,
      author: '',
      publisher: '',
      price: '',
      cover: '',
    });
    this.keys = Object.keys(this.bookForm.controls);
    this.bookForm.controls.title.valueChanges
      .pipe(first())
      .subscribe(() => this.ping());
  }

  ping() {
    this.bookForm.controls.author.setValidators([
      Validators.required,
      Validators.minLength(3),
    ]);
    this.bookForm.addControl('ebook', new FormControl(false));
    this.keys = Object.keys(this.bookForm.controls);
    this.bookForm.updateValueAndValidity();
  }

  saveBook() {
    console.table(this.bookForm.value);
    this.service.saveBook(this.bookForm.value).subscribe();
  }
}
