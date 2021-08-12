import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookApiService } from '../book-api.service';
import { SubtitleValidator } from './subtitle.validator';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: BookApiService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      subtitle: ['', [Validators.required, SubtitleValidator('12')]],
      isbn: ['', [Validators.required]],
      abstract: [''],
      numPages: [0],
      author: [''],
      publisher: [''],
      price: [''],
      cover: [''],
    });

    const foo = new FormControl('BAR');

    this.form.addControl('foo', foo);
    // this.form.valueChanges.subscribe((values) => {
    //   if (values.title.length >= 2) {
    //     foo.setValidators(Validators.required);
    //   }
    // });
  }

  saveBook() {
    this.service.createBook(this.form.getRawValue()).subscribe();
  }
}
