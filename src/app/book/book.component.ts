import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookApiService } from './book-api.service';
import { IBook } from './book.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnDestroy, AfterViewChecked {
  searchStr = '';

  muh = 'MUH';

  sub: Subscription = new Subscription();

  data: IBook[] = [];

  constructor(private service: BookApiService) {
    this.sub.add(
      this.service.getBooks().subscribe((wert) => (this.data = wert))
    );
  }
  ngAfterViewChecked(): void {
    // setTimeout(() => {
    // this.muh = 'MÄH';
    // }, 0);
  }

  goToBookDetails(data: IBook) {
    console.log(data);
  }
  setSearchString(evt: Event) {
    this.searchStr = (evt.target as HTMLInputElement).value;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
