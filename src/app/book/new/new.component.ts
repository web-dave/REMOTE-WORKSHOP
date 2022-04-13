import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent {
  form: FormGroup;
  formFields: string[] = [];
  constructor(private formBuilder: FormBuilder, private service: BookService) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      author: [''],
      abstract: [''],
      id: [''],
      subtitle: [''],
      isbn: ['', [Validators.required]],
      publisher: [''],
      price: [''],
      numPages: [0],
      cover: [''],
      userId: [0],
    });
    // this.form.addControl('foo', new FormControl(''));
    this.formFields = Object.keys(this.form.controls);
  }

  save(): void {
    this.service.createBook(this.form.value).subscribe({
      next: () => this.form.reset(),
      error: (err) => {
        // Error: Insert failed, duplicate id\n
        const msg = err.error.split('\\n');
        const foo = msg[0].split('duplicate ');
        console.log(err, msg, foo);
        this.form.get('id')?.setErrors({ duplicate: msg[0] });
      },
    });
  }
}
