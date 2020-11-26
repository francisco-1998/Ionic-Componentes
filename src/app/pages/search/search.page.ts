import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  
  albums:any[] = [];
  textoBuscar:string = '';

  constructor(private dataService:DataService) { }

  ngOnInit() {
   this.dataService.getAlbums().subscribe((data:any)=>{
      this.albums = data;
    });
  }

  onSearchChange(event){
    // console.log(event);
    this.textoBuscar = event.detail.value
  }
}
