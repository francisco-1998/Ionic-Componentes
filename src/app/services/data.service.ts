import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../Models/usuario.model';
import { Componente } from '../Models/menu';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<Usuario>('https://jsonplaceholder.typicode.com/users');
  }


  getOpts(){
    return this.http.get<Componente[]>('/assets/data/menu-opts.json')
  }
}
