import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  first,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({});
  fields = [
    'title',
    'subtitle',
    'isbn',
    'abstract',
    'numPages',
    'author',
    'publisher',
    'price',
    'cover',
  ];
  constructor(private builder: FormBuilder, private api: BookApiService) {}

  ngOnInit(): void {
    const requiredFields = ['title', 'isbn', 'author', 'price'];
    for (let field of this.fields) {
      if (field !== 'numPages') {
        this.bookForm.addControl(
          field,
          new FormControl(
            '',
            requiredFields.includes(field) ? Validators.required : null
          )
        );
      } else {
        this.bookForm.addControl(
          field,
          new FormControl(
            0,
            requiredFields.includes(field) ? Validators.required : null
          )
        );
      }
    }
    this.bookForm.get('isbn')?.addAsyncValidators(this.asyncIsbnValidator());

    this.bookForm.get('price')?.valueChanges.subscribe((data: string) => {
      if (data.length >= 3) {
        this.bookForm.get('abstract')?.addValidators([Validators.required]);
      } else {
        this.bookForm.get('abstract')?.removeValidators([Validators.required]);
      }
      this.bookForm.get('abstract')?.updateValueAndValidity();
    });
    // this.bookForm = this.builder.group({
    //   title: ['', [Validators.required]],
    //   isbn: ['', [Validators.required]],
    // });
    // this.bookForm = this.builder.group({
    //   title: '',
    //   subtitle: '',
    //   isbn: '',
    //   abstract: '',
    //   numPages: 0,
    //   author: '',
    //   publisher: '',
    //   price: '',
    //   cover: '',
    // });
  }

  asyncIsbnValidator(): AsyncValidatorFn {
    return (ctrl: AbstractControl): Observable<ValidationErrors | null> => {
      return ctrl.valueChanges.pipe(
        debounceTime(1500),
        distinctUntilChanged(),
        tap((data) => console.log(data)),
        switchMap((isbn) =>
          this.api.getBook(isbn).pipe(
            map((book) => !book.isbn),
            map((unique) => (unique ? null : { isbn_exits: true })),
            first()
          )
        )
      );
    };
  }
}
