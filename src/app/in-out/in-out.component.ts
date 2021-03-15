import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-ws-in-out',
  templateUrl: './in-out.component.html',
  styleUrls: ['./in-out.component.scss'],
})
export class InOutComponent implements OnInit {
  @Input() isHidden = false;
  foo: 'bar' | 'baz' = 'bar';

  x = 0;
  y = 0;
  constructor() {}

  ngOnInit(): void {}

  mouseMovement(event: MouseEvent) {
    this.x = event.x;
    this.y = event.y;
  }
}
