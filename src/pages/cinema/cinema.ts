import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ConversaService } from '../../app/conversa.service';

@IonicPage()
@Component({
  selector: 'page-cinema',
  templateUrl: 'cinema.html',
})
export class CinemaPage {

  mensagem = '';
  conversa: {
    nomeUsuario: string;
    comentario: string;
    data: any
  };
  historico:Array<any> = [];
  usuarios =[];
  nomeUsuarioF = '';
  comentarioF = '';
  nomeRepetido = false;
  data = new Date();
  primeiraVez = true;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public conversaService: ConversaService,
    public alertCrtl: AlertController
    ) {

    this.conversa = {
      comentario: '',
      nomeUsuario: '',
      data: ''
    };
      this.db.list('/cinema/').subscribe((resultado) =>{
        if(this.primeiraVez){
          this.usuarios = [];
          this.historico = [];
          var j = resultado.length-1
          resultado.forEach(conversa =>{
            this.historico[j]=conversa;
            if(this.usuarios.length==0)
              this.usuarios.push(conversa.nomeUsuario);
            for(var k = 0; k<this.usuarios.length; k++){
              if (this.usuarios[k] != conversa.nomeUsuario){
                this.usuarios.push(conversa.nomeUsuario);
              }
            }
            j--;
        }) 
        this.primeiraVez = false;
      }     
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CinemaPage');
  }

  enviarMsg(){
    this.nomeRepetido = false;
    if (this.nomeUsuarioF != "" && this.comentarioF != "" ){
      if(this.usuarios.length > 0){
        for(var i = 0; i<this.usuarios.length; i++){
          if(this.usuarios[i]==this.nomeUsuarioF){
            this.nomeRepetido = true;
            i==this.usuarios.length;
          }
        }
      }
      if(!this.nomeRepetido){
        var mes = this.data.getMonth()+1
        this.conversaService.addConversaCinema({nomeUsuario:this.nomeUsuarioF, comentario: this.comentarioF, data: this.data.getFullYear()+'-'+ mes +'-'+this.data.getDate()});
        this.db.list('/cinema/').subscribe((resultado) =>{
          this.historico = [];
          var j = resultado.length-1
          resultado.forEach(conversa =>{
            this.historico[j] = conversa;
            j--;
          })
        });
        this.comentarioF = '';
      }else{
        const alerta = this.alertCrtl.create({
          message: 'Este nome já foi utilizado anteriormente.',
          buttons:['OK']
        })
        alerta.present();
      }
    }else{
      const alerta = this.alertCrtl.create({
        message: 'Nome e comentário devem estar preenchidos',
        buttons:['OK']
      })
      alerta.present();
    }
  }

}
