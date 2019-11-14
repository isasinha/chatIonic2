import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CinemaPage } from '../pages/cinema/cinema';
import { EsportesPage } from '../pages/esportes/esportes';
import { LoginPage } from '../pages/login/login';
import { DiversosPage } from '../pages/diversos/diversos';
import { ConversaService } from './conversa.service';

const firebaseConfig = {
  apiKey: "AIzaSyBgWem5s8MRTw4j20ctqRKdmGlgVd5WxcA",
  authDomain: "chationic-cf28f.firebaseapp.com",
  databaseURL: "https://chationic-cf28f.firebaseio.com",
  projectId: "chationic-cf28f",
  storageBucket: "chationic-cf28f.appspot.com",
  messagingSenderId: "817041274627",
  appId: "1:817041274627:web:f22baf982db3d2cba2db36"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CinemaPage,
    EsportesPage,
    LoginPage,
    DiversosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CinemaPage,
    EsportesPage,
    LoginPage,
    DiversosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ConversaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
