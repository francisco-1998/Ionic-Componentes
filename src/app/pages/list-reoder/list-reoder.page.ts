import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reoder',
  templateUrl: './list-reoder.page.html',
  styleUrls: ['./list-reoder.page.scss'],
})
export class ListReoderPage implements OnInit {

  personajes : String[] = ['Iron-man', 'Hulk', 'Spider-man', 'Soldado del Invierno', 'Capitán America', 'Thor']
  activar:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event:CustomEvent){
    console.log(event);
    // event.detail.complete();
    this.personajes = event.detail.complete(this.personajes)
    console.log(this.personajes);
  }

  onClick(){
    this.activar=!this.activar;
  }
}
