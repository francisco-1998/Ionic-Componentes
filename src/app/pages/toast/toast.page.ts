import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastCtrl:ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Su configuración ha sido guardada.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastCtrl.create({
      header: 'Nuevo evento',
      message: 'Espam MFL gana torneo',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'newspaper-outline',
          text: '',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Leer',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}
