import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalPaymentPage } from '../modal-payment/modal-payment';
import { ModalDeclinePage } from '../modal-decline/modal-decline';
import { ModalController,  ViewController } from 'ionic-angular'; 


@IonicPage()
@Component({
  selector: 'page-job-detail',
  templateUrl: 'job-detail.html',
})
export class JobDetailPage {

  navbarTitle = 'Job Detail';
  back = "md-arrow-back";
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController, public viewCtrl: ViewController) {
  }

  payment() {
    let myModal = this.modalCtrl.create(ModalPaymentPage);
    myModal.present();
  };
  dismiss() {
    this.viewCtrl.dismiss();
  }
  declineModal() {
    let declineModal = this.modalCtrl.create(ModalDeclinePage);
    declineModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobDetailPage');
  }

}
