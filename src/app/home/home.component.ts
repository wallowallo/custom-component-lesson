import { Component } from '@angular/core';
import { SimpleService } from '../services/service.module';

@Component({
  selector: 'home',
  template: `
  <div>im a home component</div>
  <div>{{simpleService.message}}</div>
  <widget-one [message]="simpleService.message"></widget-one>
    <widget-one [message]="'hello world'"></widget-one>
  `
})
export class HomeComponent {
  constructor(private simpleService: SimpleService) {}
}
