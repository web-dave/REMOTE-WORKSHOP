import {
  ChangeDetectorRef,
  OnDestroy,
  Pipe,
  PipeTransform,
} from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  NEVER,
  Observable,
  of,
  Subscription,
} from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { IBook } from 'src/models/book.interface';

@Pipe({
  name: 'waschbenzinPipe',
  pure: true,
})
export class WaschbenzinPipe implements PipeTransform {
  books$: BehaviorSubject<Observable<IBook[]>> = new BehaviorSubject<
    Observable<IBook[]>
  >(of([]));
  search$: BehaviorSubject<string> = new BehaviorSubject('');
  result$: Observable<IBook[]> = NEVER;

  constructor() {
    this.result$ = combineLatest([
      this.books$.pipe(
        distinctUntilChanged(),
        switchMap((it) => it)
      ),
      this.search$.pipe(distinctUntilChanged()),
    ]).pipe(map(([books, search]) => this.filterList(books, search)));
  }

  transform(value: Observable<IBook[]>, search: string): Observable<IBook[]> {
    this.books$.next(value);
    this.search$.next(search);
    return this.result$;
  }

  filterList(books: IBook[], search: string) {
    return search == null || search === ''
      ? books
      : books.filter(
          (book) =>
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.abstract?.toLowerCase().includes(search.toLowerCase())
        );
  }
}
