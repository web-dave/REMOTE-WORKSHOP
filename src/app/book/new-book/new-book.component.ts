import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss'],
})
export class NewBookComponent implements OnInit {
  form!: FormGroup;
  constructor(private builder: FormBuilder, private api: BookApiService) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      title: ['', []],
      author: ['', []],
      abstract: ['', []],
      subtitle: ['', []],
      isbn: ['', [Validators.required]],
      numPages: [0],
      publisher: ['', []],
      price: ['', []],
      cover: ['', []],
    });
    this.form.addControl('foo', new FormControl('Bar'));
    this.form.controls.isbn.valueChanges.subscribe((d) => {
      if (d.length >= 3) {
        this.form.controls.title.setValidators([
          Validators.nullValidator,
          Validators.required,
          Validators.minLength(2),
        ]);
        this.form.controls.title.updateValueAndValidity();
      }
    });
  }

  saveBook() {
    console.log(this.form.value);
    this.api.saveBook(this.form.value).subscribe();
  }
}
