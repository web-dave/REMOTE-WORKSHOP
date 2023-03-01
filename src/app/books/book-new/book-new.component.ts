import { Component, inject } from '@angular/core';
import {
  FormControl,
  NonNullableFormBuilder,
  Validators,
  FormGroup,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

type IFormConfig<T> = { [K in keyof T]: [T[K], any[]] };

export type IForm<T> = {
  [K in keyof T]: FormControl<T[K]>;
};

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent {
  private bookServie = inject(BookService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  // private formBuilder = inject(NonNullableFormBuilder);
  keys = Object.keys(this.bookServie.getBookKeys());
  bookForm = inject(NonNullableFormBuilder).group(
    this.buildFormConfig(this.keys)
  );
  saved: boolean = false;

  foo() {
    this.bookForm.controls.author;
  }

  saveBook() {
    const book = this.bookForm.getRawValue();
    this.bookServie.createBook(book).subscribe({
      next: (book) => {
        this.saved = true;
        this.router.navigate(['..', book.isbn], { relativeTo: this.route });
      },
    });
  }

  buildFormConfig(keys: string[]): IFormConfig<IBook> {
    Object.fromEntries;
    // let config: any = {};
    let config: Partial<IFormConfig<IBook>> = {};
    const defaultbook: IBook = this.bookServie.getBookKeys();

    for (let key of keys) {
      (config as any)[key] = [(defaultbook as any)[key], []];
    }
    return config as IFormConfig<IBook>;
  }

  isSaved(): boolean {
    console.log(
      this.saved,
      this.bookForm.pristine,
      this.saved || this.bookForm.pristine
    );
    return this.saved || this.bookForm.pristine;
  }
}
