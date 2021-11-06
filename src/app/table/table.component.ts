import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelAddUpdateComponent } from '../model-add-update/model-add-update.component';
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

  constructor(private autoService: AutosService, private modalService:NgbModal) { }

  ngOnInit(){
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    })
  }

  openModalEdit(auto: Automovil){
    const modalRef = this.modalService.open(ModelAddUpdateComponent,{ centered : true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';
  }
}
