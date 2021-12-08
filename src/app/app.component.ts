import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  book = {
    title: 'How to win friends',
    author: 'Dale Carnegie',
    abstract:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eaque voluptate mollitia natus facere ut adipisci dolores, distinctio laboriosam beatae ducimus iusto alias quo eum explicabo quam itaque corporis! Eius.',
  };
}
