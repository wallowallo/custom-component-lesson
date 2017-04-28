import { Component } from '@angular/core';

@Component({
  selector: 'widget-two',
  template: `
  <h2>above</h2>
  <ng-content select="h2"></ng-content>
  <ng-content select=".content"></ng-content>
  <ng-content select="[footer]"></ng-content>
  <h2>below</h2>
  `,
  //select="[footer]" means select the attribute of footer
  //select="h2" selects the h2 in the home component
  //select=".content" selects from class in home component
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
