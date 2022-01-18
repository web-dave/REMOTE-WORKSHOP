import { Component, OnInit } from '@angular/core';
import { BookApiService } from '../book/book-api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private service: BookApiService) {}

  ngOnInit(): void {}
}
