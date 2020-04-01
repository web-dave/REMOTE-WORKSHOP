import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'hurz-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit {
  @Input() myTitle: string;
  @Output() myTitleClicked = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  sendMyTitle() {
    this.myTitleClicked.emit(this.myTitle);
  }
}
