import { Component } from '@angular/core';

@Component({
  selector: 'widget-two',
  template: `
  <h2>above</h2>
  <ng-content></ng-content>
  <h2>below</h2>
  `,
  styles: [`
    :host{
      display: block;
      border: 3px solid red;
    }
    `]
})
export class WidgetTwoComponent {
  selected = true;
}
