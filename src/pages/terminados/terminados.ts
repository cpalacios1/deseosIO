import { DetalleComponent } from './../detalle/detalle';
import { Lista } from './../../app/clases/listas';
import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from './../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from './../agregar/agregar';

@Component({
  selector: 'app-terminados',
  templateUrl: './terminados.html'
})
export class TerminadosComponent implements OnInit {

  constructor(protected _listaDeseos: ListaDeseosService, protected _navController: NavController) {

  }

  ngOnInit() {
    console.log("Iniciando TerminadosComponent");
  }

  irAgregar(){
    this._navController.push(AgregarComponent);
  }

  verDetalle(lista: Lista, idx: number) {
    this._navController.push(DetalleComponent, {lista, idx});

  }
}
