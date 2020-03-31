import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hurz-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit {
  @Input() myTitle: string;
  constructor() {}

  ngOnInit(): void {}
}
