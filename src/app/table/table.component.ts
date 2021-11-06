import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AutosService } from '../Servicios/autos.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  autos: Automovil[] = [];
  page=1;
  pageSize=15;

  constructor(private autoService: AutosService) { }

  ngOnInit(){
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    })
  }

}
