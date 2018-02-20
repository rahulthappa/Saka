import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalReviewPage } from '../modal-review/modal-review';
import { ModalController,  ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-job-accepted',
  templateUrl: 'job-accepted.html',
})
export class JobAcceptedPage {
  navbarTitle = 'Job Detail';
  back = "md-arrow-back";

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {
  }
  myReview() {
    let reviewModal = this.modalCtrl.create(ModalReviewPage);
    reviewModal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad JobAcceptedPage');
  }
}
