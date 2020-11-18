import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  fechaHoy: Date = new Date();
  monthShortNames="Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre"
  constructor() { }

  ngOnInit() {
  }

  obtenerFecha(event) {
    console.log(new Date(event.detail.value));
  }

  customPickerOptions = {
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Ok',
        handler: (event) => {
          console.log(event);
        }
      },
    ]
  }
}
