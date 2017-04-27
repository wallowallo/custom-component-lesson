import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-one',
  template: `
  <div>one</div>
  <h2>Ones message</h2>
  <h3>{{message}}</h3>
  `
})
export class WidgetOneComponent {
  @Input() message;
}
