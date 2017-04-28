import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-one',
  styles: [`
    :host{
      display: block;
      border: 3px dashed black;
      font-family: 'Arial';
    }
    `],
  template: `
  <h2>Ones message</h2>
  <h3>{{message}}</h3>
  `
})
export class WidgetOneComponent {
  @Input() message;
}
