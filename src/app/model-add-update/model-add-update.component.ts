import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../models';

@Component({
  selector: 'app-model-add-update',
  templateUrl: './model-add-update.component.html',
  styleUrls: ['./model-add-update.component.css']
})
export class ModelAddUpdateComponent implements OnInit {
  minValor: number = 2000;
  maxValor: number = 2022;
 
  accion?: string;
  auto: Automovil = {} as Automovil;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close(): void{
    let modelos: string[] = [];

    for (let i=this.minValor; i<= this.maxValor; i++) {
      modelos.push(i.toString());
    }

    this.auto.modelos=modelos;
    this.activeModal.close(this.auto);
  }

}
