import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  link: string | null = 'books';
  constructor() {}

  ngOnInit(): void {
    // setTimeout(() => (this.link = null), 1500);
  }
}
