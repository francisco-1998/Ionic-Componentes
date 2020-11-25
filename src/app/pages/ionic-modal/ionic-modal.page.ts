import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-ionic-modal',
  templateUrl: './ionic-modal.page.html',
  styleUrls: ['./ionic-modal.page.scss'],
})
export class IonicModalPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        nombre: 'Francisco',
        pais: 'Ecuador'
      }
    });
    await modal.present();

        // const resp = await modal.onDidDismiss();
        const {data} = await modal.onWillDismiss();
        console.log(data);

  }

}
