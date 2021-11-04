import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() filteredBooks: IBook[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  showDetails(data: IBook) {
    this.router.navigate([data.isbn], { relativeTo: this.route });
  }
}
