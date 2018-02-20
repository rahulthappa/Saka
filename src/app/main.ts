import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {  NavController, ViewController } from 'ionic-angular';
//import { JobHistoryPage } from '../pages/job-history/job-history';



export class StartPage {
   

    constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}
    
   
    dismiss() {
      this.viewCtrl.dismiss();
    }
  }
platformBrowserDynamic().bootstrapModule(AppModule);
