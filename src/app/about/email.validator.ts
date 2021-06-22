import {
  AsyncValidatorFn,
  FormControl,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BooksService } from '../books/shared/books.service';

export function emailValidator(control: FormControl): ValidationErrors {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(control.value)
    ? null
    : { email: 'Adresse ist nicht valide' };
}

export function emailAsyncValidator(): AsyncValidatorFn {
  return (control: FormControl): Observable<ValidationErrors> => {
    console.log(control.value);
    return of(0 > 1 ? null : { emailAsync: 'Adresse ist nicht valideAsync' });
  };
}
