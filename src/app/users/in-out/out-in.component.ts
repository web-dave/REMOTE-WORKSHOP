import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ng-ws-in-out',
  templateUrl: './in-out.component.html',
  styleUrls: ['./in-out.component.scss'],
})
export class InOutComponent implements OnInit {
  @Input() isHidden = false;
  @Output() coords = new EventEmitter<{ x: number; y: number }>();
  foo: 'bar' | 'baz' = 'bar';

  constructor() {}

  ngOnInit(): void {}

  mouseMovement(event: MouseEvent) {
    this.coords.emit({ x: event.x, y: event.y });
  }
}
