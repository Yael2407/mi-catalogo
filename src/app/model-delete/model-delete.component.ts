import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../models';

@Component({
  selector: 'app-model-delete',
  templateUrl: './model-delete.component.html',
  styleUrls: ['./model-delete.component.css']
})
export class ModelDeleteComponent implements OnInit {
  accion?: string;
  auto : Automovil = {} as Automovil;

  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }

}
