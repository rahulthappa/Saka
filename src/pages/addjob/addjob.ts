import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-addjob',
  templateUrl: 'addjob.html',
})
export class AddjobPage {
  navbarTitle = 'SAKA';
  back = "md-arrow-back";
  saveButton = "Save";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddjobPage');
  }

}
