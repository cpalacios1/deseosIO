import { Lista } from './../clases/listas';
import { Injectable } from '@angular/core';

@Injectable()
export class ListaDeseosService {
  listas: Lista[] = [];

  constructor(){
    // let lista1 = new Lista('Compras de supermercado');
    // let lista2 = new Lista('Juego que deseo');
    // let lista3 = new Lista('Libros');

    // this.listas.push(lista1);
    // this.listas.push(lista2);
    // this.listas.push(lista3);
    this.cargarData();
    console.log('Servicio inicializado');
  }

  actualizarData(){
    localStorage.setItem("data", JSON.stringify(this.listas));
    // this.cargarData();
  }

  cargarData(){
    if(localStorage.getItem("data")){
      console.log('cargarData');
      this.listas = JSON.parse(localStorage.getItem("data"));
    }
  }

  agregarLista(lista: Lista){
    this.listas.push(lista);
    this.actualizarData();
  }

  eliminarLista(lista: Lista){
    console.log(lista);
    console.log(this.listas);
    let idx = this.listas.indexOf(lista);
    this.listas.splice(idx,1);
    this.actualizarData();
  }
}
