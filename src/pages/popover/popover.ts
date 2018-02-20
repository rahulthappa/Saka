import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { ModalPasswordPage } from '../modal-password/modal-password';



@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }
  close() {
    this.viewCtrl.dismiss();
  }

  ChangePassword() {
    let myModal = this.modalCtrl.create(ModalPasswordPage);
    myModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

}
