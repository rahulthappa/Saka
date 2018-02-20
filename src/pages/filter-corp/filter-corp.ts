import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-filter-corp',
  templateUrl: 'filter-corp.html',
})
export class FilterCorpPage {

  navbarTitle = 'Filter';
  back = "md-close";
  saveButton = "Save";
  price: number = 200;

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterCorpPage');
  }

}
