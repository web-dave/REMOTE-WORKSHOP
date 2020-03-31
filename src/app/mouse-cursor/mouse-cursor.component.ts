import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hurz-mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.scss']
})
export class MouseCursorComponent implements OnInit {
  x: number;
  y: number;
  constructor() {}

  ngOnInit(): void {}
  fooFuu(e: MouseEvent) {
    this.x = e.x;
    this.y = e.y;
  }
}
