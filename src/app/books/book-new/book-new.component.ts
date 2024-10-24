import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { BookService } from '../book.service';

const comDirValidator = (control: AbstractControl): ValidationErrors | null => {
  return (control.getRawValue() as string).toLowerCase().includes('comdir')
    ? null
    : { comDir: 'say my name!' };
};

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent {
  createForm = inject(NonNullableFormBuilder).group({
    title: ['', [Validators.required, comDirValidator], []],
    subtitle: ['', [], []],
    isbn: ['', [Validators.required, Validators.minLength(13)], []],
    abstract: ['', [], []],
    numPages: [0, [], []],
    author: ['', [], []],
    publisher: ['', [], []],
    price: ['', [], []],
    cover: ['', [], []],
  });

  private service = inject(BookService);

  saveBook() {
    this.service.createOne(this.createForm.getRawValue()).subscribe();
  }
}
