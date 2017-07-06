import { ListaDeseosService } from './../../app/services/lista-deseos.service';
import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.html'
})
export class AgregarComponent implements OnInit {
  nombreLista: string = "";
  nombreItem: string = "";

  items: ListaItem[] = [];

  constructor(public _alertCtrl: AlertController, public _navCtrl: NavController, public _listaDeseosService: ListaDeseosService) { }

  ngOnInit() {
    console.log("Iniciando AgregarComponent ");
  }

  agregar(){
    if (this.nombreItem.length == 0){
      return;
    }
    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push(item);
    this.nombreItem = '';
  }

  borrar(item: number){
    this.items.splice(item, 1);
  }

  guardarLista(){
    if (this.nombreLista.length == 0){
      this.showAlert("Nombre de la lista", "El nombre de la lista es necesario.");
      return;
    }
    let lista = new Lista(this.nombreLista);
    lista.items = this.items;

    // this._listaDeseosService.listas.push(lista);
    this._listaDeseosService.agregarLista(lista);
    this._navCtrl.pop();
  }

  showAlert(titulo: string, mensaje: string) {
    let alert = this._alertCtrl.create({
      title: titulo,
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }
}
