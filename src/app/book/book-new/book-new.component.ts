import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  form = this.builder.group<any>({
    title: ['', [Validators.required, Validators.minLength(7)]],
    author: ['Author', []],
    abstract: ['Abstract', []],
    subtitle: ['Subtitle', []],
    isbn: ['', [Validators.required]],
    numPages: [0],
    publisher: ['Publisher', []],
    price: ['1,99', []],
    cover: ['', []],
  });
  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {}

  addCtrl() {
    this.form.addControl('foo', new FormControl(['Bar']));
  }

  save() {
    console.table(this.form.value);
  }
}
