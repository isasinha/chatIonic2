import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cinema',
  templateUrl: 'cinema.html',
})
export class CinemaPage {

  conversa:{
    comentario: string,
    nomeUsuario: string
  }
  mensagem = '';
  historico = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.conversa = {
      comentario: '',
      nomeUsuario: ''
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CinemaPage');
  }

  enviarMsg(){
    this.mensagem = this.conversa.nomeUsuario + " disse: " + this.conversa.comentario;
    this.historico.push(this.mensagem);
    this.conversa.comentario = ''
  }

}
