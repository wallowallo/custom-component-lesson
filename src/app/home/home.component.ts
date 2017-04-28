import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from "@angular/core";
import {WidgetThree} from "../widgets/widget-three.component";
@Component({
    selector: 'home',
    template: `
      <button (click)="move()">Move</button>
      <button (click)="createInputs()">FOURTH</button>
      <button (click)="delInput()">Delete</button>
      <button (click)="templateCreate()">Template Creater</button>
      <div #container></div>


      <template #template>
        <h2>My amazing template</h2>
        <button>My amazing button</button>
      </template>
`
})
export class HomeComponent{
    @ViewChild('container', {read:ViewContainerRef}) container;

    @ViewChild('template') template;

    widgetRef;

    constructor(private resolver:ComponentFactoryResolver){}

    ngAfterContentInit(){
        const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);

        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.widgetRef = this.container
          .createComponent(widgetFactory);

        this.widgetRef.instance.message = "you are not my mate";
    }

    //creating inputs as input nr 4
    createInputs() {
      const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);

      const widgetRefFourth = this.container
        .createComponent(widgetFactory, 3);

      widgetRefFourth.instance.message = "Move! I am fourth!";
    }

    //moving inputs to a random index
    move() {
      const randomIndex = Math.floor(Math.random() * this.container.length);

      this.container.move(this.widgetRef.hostView, randomIndex);
    }

    //deleting inputs with random index
    delInput() {
      const randomIndex = Math.floor(Math.random() * this.container.length);

      this.container.detach(randomIndex);
    }

    templateCreate() {
      this.container.createEmbeddedView(this.template);
    }
}
