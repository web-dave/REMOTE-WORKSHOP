import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, NEVER } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IBook } from 'src/models/book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  book$: Observable<IBook> = NEVER;
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    this.book$ = this.route.params.pipe(
      switchMap((data) => this.service.getBook(data['isbn']))
    );
  }
  save(b: IBook) {
    console.log(b);
  }
}
