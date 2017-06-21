import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from './../../app/services/lista-deseos.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.html'
})
export class PendientesComponent implements OnInit {
  constructor(protected _listaDeseos: ListaDeseosService) { }

  ngOnInit() { }
}
