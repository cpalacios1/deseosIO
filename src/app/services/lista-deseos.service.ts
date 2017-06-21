import { Lista } from './../clases/listas';
import { Injectable } from '@angular/core';

@Injectable()
export class ListaDeseosService {
  listas: Lista[] = [];

  constructor(){
    let lista1 = new Lista('Compras de supermercado');
    let lista2 = new Lista('Juego que deseo');
    let lista3 = new Lista('Libros');

    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista3);

    console.log('Servicio inicializado');
  }
}
