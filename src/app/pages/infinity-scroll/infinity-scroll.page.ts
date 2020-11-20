import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.page.html',
  styleUrls: ['./infinity-scroll.page.scss'],
})
export class InfinityScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) iScroll: IonInfiniteScroll;
  numeros: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData() {
    setTimeout(() => {
      const nuevo = Array(15);
      this.numeros.push(...nuevo);

      if(this.numeros.length>70){
        this.iScroll.complete();
        this.iScroll.disabled=true;
        return;
      }
      
      this.iScroll.complete();

    }, 1000);
  }

}
