import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { newBookSave, newBookStart } from '../redux/books.action';
import { IBook } from '../shared/book.interface';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'ng-sw-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  bookNewForm: FormGroup;
  authors: FormArray = new FormArray([]);
  constructor(
    private builder: FormBuilder,
    private service: BooksService,
    private store: Store<IBook[]>
  ) {}

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
    this.authors.valueChanges
      .pipe(map((autoren) => autoren.filter((author: string[]) => author)))
      .subscribe((data) => {
        console.log(data);
        this.bookNewForm.get('author').setValue(data.join(','));
        this.bookNewForm.markAsTouched();
        this.bookNewForm.updateValueAndValidity();
      });
    this.store.dispatch(newBookStart());
    this.store
      .select((state) => state)
      .subscribe((data) => console.log('=====>', data));
  }

  save() {
    this.store.dispatch(newBookSave({ book: this.bookNewForm.value }));
  }

  addAuthor() {
    this.authors.push(new FormControl());
  }

  deleteAuthor(i: number) {
    this.authors.removeAt(i);
  }
}
