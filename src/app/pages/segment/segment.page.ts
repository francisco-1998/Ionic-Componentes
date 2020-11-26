import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes: Observable<any>;
  termino:string = '';
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.superHeroes=this.dataService.getHeroes();
  }

  segmentChanged(event){
    if (event.detail.value==='todos') {
      return this.termino='';
      
    }
    this.termino=event.detail.value;
  }

}
