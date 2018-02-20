import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-decline',
  templateUrl: 'modal-decline.html',
})
export class ModalDeclinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDeclinePage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  
}
