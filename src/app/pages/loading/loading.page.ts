import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement;
  constructor(private loadingCtrl:LoadingController) { }

  ngOnInit() {
  }

  onClick(){
    this.presentLoading('Cargando');
    setTimeout(() => {
      this.loading.dismiss();
    }, 1500);
  }

  async presentLoading(message:string) {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: message,
      // duration: 2000
    });
    await this.loading.present();
  }
}
