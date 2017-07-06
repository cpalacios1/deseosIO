import { ListaDeseosService } from './../../app/services/lista-deseos.service';
import { Lista, ListaItem } from './../../app/clases/index';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.html'
})
export class DetalleComponent implements OnInit {
  idx: number;
  lista: Lista;

  constructor(public _navController: NavController,
              public _navParams: NavParams,
              public _listaDeseosService: ListaDeseosService,
              public alertCtrl: AlertController) {
    this.idx = _navParams.get("idx");
    this.lista = _navParams.get("lista");

   }

  ngOnInit() {
    console.log("Iniciando DetalleComponent");
   }

  actualizar(item: ListaItem){
    item.completado = !item.completado;

    let todosMarcados = true;
    for(let item of this.lista.items){
      if(!item.completado){
        todosMarcados = false;
        break;
      }
    }
    this.lista.terminado = todosMarcados;

    this._listaDeseosService.actualizarData();
  }

  borrarItem(){

    // this.showConfirm('Eliminar '+this.lista.nombre,
    //                   'La lista se eliminará permanentemente ¿Desea continuar?');
    let confirm = this.alertCtrl.create({
      title: 'Eliminar '+this.lista.nombre,
      message: 'La lista se eliminará permanentemente ¿Desea continuar?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            this._listaDeseosService.eliminarLista(this.lista);
            console.log('showConfirm, cancelar');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this._listaDeseosService.eliminarLista(this.lista);
            this._navController.pop();
            console.log('showConfirm, aceptar');
          }
        }
      ]
    });
    confirm.present();
    console.log('Respuesta');
  }

  // showConfirm(titulo: string, mensaje: string) {
  //   let confirm = this.alertCtrl.create({
  //     title: titulo,
  //     message: mensaje,
  //     buttons: [
  //       {
  //         text: 'Cancelar',
  //         handler: () => {
  //           console.log('showConfirm, cancelar');
  //         }
  //       },
  //       {
  //         text: 'Aceptar',
  //         handler: () => {
  //           console.log('showConfirm, aceptar');
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present();

  // }
}
