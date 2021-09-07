import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss'],
})
export class NewBookComponent implements OnInit {
  newBookForm!: FormGroup;
  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.newBookForm = this.builder.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required, Validators.minLength(4)]],
      abstract: [''],
      subtitle: [''],
      isbn: ['', [Validators.required]],
      numPages: [0],
      publisher: [''],
      price: [''],
      cover: [''],
    });

    this.newBookForm.controls.title;
  }
}
