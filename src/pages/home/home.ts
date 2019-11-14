import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CinemaPage } from '../cinema/cinema';
import { EsportesPage } from '../esportes/esportes';
import { DiversosPage } from '../diversos/diversos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  opcaoSelecionada: any;
  opcoes: Array<{categoria: string, endereco: any}>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {

      this.opcaoSelecionada = navParams.get('opcao');
      this.opcoes = [
        {categoria: 'Cinema', endereco: CinemaPage},
        {categoria: 'Esportes', endereco: EsportesPage},
        {categoria: 'Diversos', endereco: DiversosPage}
      ];

  }

opcaoEscolhida(event, opcao){
  this.navCtrl.push(opcao.endereco); 
}

}
