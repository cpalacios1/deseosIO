import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from './../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from './../agregar/agregar';
import { ListaItem } from "../../app/clases/index";

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.html'
})
export class PendientesComponent implements OnInit {
  items: ListaItem[] = [];

  constructor(protected _listaDeseos: ListaDeseosService, protected _navController: NavController) { }

  ngOnInit() { }

  irAgregar(){
    this._navController.push(AgregarComponent)
  }
}
