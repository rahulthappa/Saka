import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  data = {
    card: true,
  }

  constructor(public navCtrl: NavController, params: NavParams, public viewCtrl: ViewController) {
    // this.myParam = params.get('myParam');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  


  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}

