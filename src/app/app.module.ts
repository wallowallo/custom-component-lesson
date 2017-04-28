import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WidgetOneComponent } from './widgets/widget-one.component';
import { WidgetTwoComponent } from './widgets/widget-two.component';
import { WidgetThreeComponent } from './widgets/widget-three.component';

import { ServiceModule } from './services/service.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WidgetOneComponent,
    WidgetTwoComponent,
    WidgetThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ServiceModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
