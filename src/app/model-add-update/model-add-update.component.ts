import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../models';

@Component({
  selector: 'app-model-add-update',
  templateUrl: './model-add-update.component.html',
  styleUrls: ['./model-add-update.component.css']
})
export class ModelAddUpdateComponent implements OnInit {
  accion?: string;
  auto?: Automovil;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
