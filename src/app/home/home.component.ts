import { Component } from '@angular/core';
import { SimpleService } from '../services/service.module';

@Component({
  selector: 'home',
  template: `
  <widget-two>

    <widget-one [message]="simpleService.message"></widget-one>

  </widget-two>

  <widget-two>

    <h2>Title</h2>
    <div class="content">Some Content</div>
    <h3 footer>footer</h3>

  </widget-two>

  <widget-three></widget-three>
  `
})
export class HomeComponent {
  constructor(private simpleService: SimpleService) {}
}
