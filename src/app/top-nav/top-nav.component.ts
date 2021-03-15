import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-ws-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  user: any;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => (this.user = { name: 'Hurbelwonz' }), 2500);
  }
}
