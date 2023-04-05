import { Component, Input } from '@angular/core';

@Component({
  selector: 'tr[app-tr]',
  templateUrl: './tr.component.html',
  styleUrls: ['./tr.component.scss'],
})
export class TrComponent {
  @Input() book: any;
}
