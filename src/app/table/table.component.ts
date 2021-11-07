import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelAddUpdateComponent } from '../model-add-update/model-add-update.component';
import { Automovil } from '../models';
import { AutosService } from '../Servicios/autos.service';
import { ModelDeleteComponent } from '../model-delete/model-delete.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  auto?: Automovil;
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

    modalRef.result.then(
      (auto) =>
      {this.autoService.updateAutos(auto).subscribe(response => console.log(response) )}
      ),
      (reason: any) => {console.log(reason)}
  }

  openModalAdd(){
    const modalRef = this.modalService.open(ModelAddUpdateComponent,{ centered : true});
    modalRef.componentInstance.accion = 'Agregar';

    modalRef.result.then(
      (auto) =>
      {this.autoService.addAutos(auto).subscribe(response => console.log(response) )}
      ),
      (reason: any) => {console.log(reason)}
  }

  openModalDelete(auto: Automovil){
    const modalRef = this.modalService.open(ModelDeleteComponent,{ centered : true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Eliminar';

    modalRef.result.then(
      (auto) =>
      {this.autoService.deleteAutos(auto).subscribe(response => console.log(response))}
      ),
      (reason: any) => {console.log(reason)}
  }
}
