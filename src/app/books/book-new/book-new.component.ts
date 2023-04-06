import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

export type IForm<T> = {
  [K in keyof T]: FormControl<T[K]>;
};

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent {
  service = inject(BookService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  fBuilder = inject(NonNullableFormBuilder);

  newBookForm: FormGroup<IForm<IBook>> = this.fBuilder.group({
    title: ['', [Validators.required, Validators.minLength(7)], []],
    subtitle: ['', [klausValidator], []],
    isbn: ['', [Validators.required], []],
    abstract: ['', [], []],
    numPages: [0, [], []],
    author: ['', [], []],
    publisher: ['', [], []],
    price: ['', [], []],
    cover: ['', [], []],
  });

  keys = this.getKeys();

  saveBook() {
    this.service.createBook(this.newBookForm.value).subscribe();
  }

  getKeys(): string[] {
    // this.newBookForm.controls['isbn']
    return Object.keys(this.newBookForm.controls);
  }
}

const klausValidator = (control: AbstractControl): ValidationErrors | null => {
  return String(control.value).toLowerCase() === 'klaus'
    ? { klaus: 'Klaus ist nicht verfügbar' }
    : null;
};

// Control.errors = {...klausValidator()}
