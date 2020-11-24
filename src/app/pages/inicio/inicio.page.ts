import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/Models/menu';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(private dataService:DataService) {

  }

  ngOnInit() {
    this.componentes = this.dataService.getOpts();
  }

}
