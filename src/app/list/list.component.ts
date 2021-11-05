import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../Servicios/autos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[] = [];
  autoSeleccionado?: Automovil;

  constructor(private modalService: NgbModal, private autoService: AutosService) { }

  ngOnInit() {

    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    })


  }

  openModal(auto: Automovil, content: any) {
    this.autoSeleccionado = auto;

    this.modalService.open(content).result.then((result) => {
      this.autoSeleccionado = undefined;
    }, (reason) => {
      this.autoSeleccionado = undefined;
    });
  }

}
