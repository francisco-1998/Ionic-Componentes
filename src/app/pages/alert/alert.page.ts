import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl:AlertController) { }

  ngOnInit() {
  }

  
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Aqui probando las alertas',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Ok',
          handler: ()=>{
            console.log('Like en ok');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'rojo'

        }
    ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Formulario',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Ingrese su nombre'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          placeholder: 'Ingrese su apellido'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Autobiografia'
        },
        {
          name: 'name3',
          type: 'url',
          placeholder: 'Portfolio web personal'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '1998-03-01',
          max: '2025-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date',
          min: '1998-03-01',
          max: '2025-01-12'
      
          
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Contraseña',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }


}
