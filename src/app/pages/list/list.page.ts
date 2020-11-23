import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Usuario } from '../../Models/usuario.model';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  listaUsuarios: Observable<Usuario>;
  @ViewChild(IonList) iol:IonList;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.listaUsuarios = this.dataService.getUsers();
  }

  delete(user:Usuario){
    console.log('delete: ', user);
    this.iol.closeSlidingItems();
  }

  share(user:Usuario){
    console.log('share: ', user);
    this.iol.closeSlidingItems();
  }

}
