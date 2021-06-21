import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { map } from 'rxjs/operators';
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
    this.authors.valueChanges
      .pipe(map((autoren) => autoren.filter((author: string[]) => author)))
      .subscribe((data) => {
        console.log(data);
        this.bookNewForm.get('author').setValue(data.join(','));
      });
  }

  save() {
    this.service.createBook(this.bookNewForm.value).subscribe();
  }

  addAuthor() {
    this.authors.push(new FormControl());
  }

  deleteAuthor(i: number) {
    this.authors.removeAt(i);
  }
}
