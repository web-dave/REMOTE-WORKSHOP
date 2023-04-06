import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';
import { code } from '../morse-code';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent {
  private route = inject(ActivatedRoute);
  private service = inject(BookService);
  book$ = this.service.getBook(this.route.snapshot.params['isbn']);
  book: IBook | undefined;
  // sub: any;
  baz = 'baz';
  ngOnInit() {
    // setInterval(() => {
    //   this.baz = 'i bims';
    // }, 1500);

    // this.sub = this.service
    //   .getBook(this.route.snapshot.params['isbn'])
    //   .subscribe((response) => (this.book = response));

    this.route.params.subscribe((data) => {
      this.book$ = this.service.getBook(data['isbn']);
      // .subscribe((response) => (this.book = response));
    });
  }
  // ngOnDestroy(): void {
  //   console.log('Destroi');

  //   // this.sub.unsubscribe();
  // }

  uppercase(a: string) {
    console.log('Methode');

    return a.toUpperCase();
  }
  morse(value: string): string {
    console.log('Methode', value);

    const c: string[] = value.split('');

    return (
      c
        // .map((zeichen) => zeichen.toLowerCase())
        .map((zeichen) => `${code[zeichen] ? code[zeichen] : zeichen} `)
        .join('')
    );
  }
}
