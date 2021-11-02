import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from '../data';
import { Automovil } from '../models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[] = [];
  autoSeleccionado?: Automovil;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.autos = AUTOMOVILES;
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
