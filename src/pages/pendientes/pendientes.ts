import { DetalleComponent } from './../detalle/detalle';
import { Lista } from './../../app/clases/listas';
import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from './../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from './../agregar/agregar';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.html'
})
export class PendientesComponent implements OnInit {

  constructor(protected _listaDeseos: ListaDeseosService, protected _navController: NavController) {

  }

  ngOnInit() {
    console.log("Iniciando PendientesComponent");
  }

  irAgregar(){
    this._navController.push(AgregarComponent);
  }

  verDetalle(lista: Lista, idx: number) {
    this._navController.push(DetalleComponent, {lista, idx});

  }
}
