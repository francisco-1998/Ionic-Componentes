import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  items = new Array(5);
  constructor(private popoverCtrl:PopoverController) { }

  ngOnInit() {}

  getData(i:number){
    this.popoverCtrl.dismiss({
      data: i
    })
  }

}
