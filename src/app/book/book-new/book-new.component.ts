import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ValidationErrors,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  form = this.builder.group<any>({
    title: ['', [Validators.required, Validators.minLength(7), titleValidator]],
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

  ngOnInit(): void {
    this.form.controls.title.valueChanges.subscribe((data) => {
      if (data === 'Marion') {
        this.form.controls.subtitle.setValue('Marions Welt');
        this.form.controls.cover.addValidators(Validators.required);
        this.form.controls.cover.updateValueAndValidity();
      } else {
        this.form.controls.cover.clearValidators();
        this.form.controls.cover.updateValueAndValidity();
      }
    });
  }

  addCtrl() {
    this.form.addControl('foo', new FormControl(['Bar']));
  }

  save() {
    console.table(this.form.value);
  }
}

function titleValidator(control: AbstractControl): ValidationErrors | null {
  if (control.value === 'Marion') {
    return null;
  } else {
    return { title: 'Title is not Marion' };
  }
}
