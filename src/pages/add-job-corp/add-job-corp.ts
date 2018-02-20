import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-add-job-corp',
  templateUrl: 'add-job-corp.html',
})
export class AddJobCorpPage {

  navbarTitle = 'SAKA';
  back = "md-arrow-back";
  saveButton = "Save";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddJobCorpPage');
  }

}
