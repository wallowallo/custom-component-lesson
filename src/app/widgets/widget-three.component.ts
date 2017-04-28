import { Component, ViewChild, Renderer } from '@angular/core';

@Component({
  selector: 'widget-three',
  //styles with :host only applies to the specific component
  styles: [`

    `],
  template: `
  <input #input type="text">
  <!-- <widget-one></widget-one> -->
  `
})
export class WidgetThreeComponent {
  @ViewChild('input') input;
  //@ViewChild(WidgetOne) to access widget one

  constructor(private renderer: Renderer) {}

  ngAfterViewInit() {
    console.log(this.input);
    this.renderer.invokeElementMethod(
      this.input.nativeElement,
      'focus'
    );
  }
}
