import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'zeiss-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  newBookForm!: FormGroup;
  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    let publisher = this.builder.group({
      name: [''],
      url: [''],
    });
    this.newBookForm = this.builder.group({
      title: ['', [Validators.required, Validators.minLength(2)], []],
      subtitle: ['', [], []],
      isbn: ['', [Validators.minLength(13)], []],
      abstract: ['', [], []],
      numPages: [0, [], []],
      author: ['', [], []],
      cover: ['', [], []],
      publisher: publisher,
    });
  }
  saveBook() {
    let ranking = new FormControl(7);

    this.newBookForm.addControl('ranking', ranking);
    this.newBookForm.valueChanges.subscribe(console.log);
  }
}
