import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  
  navbarTitle = 'Filter';
  back = "md-close";
  saveButton = "Save";
  price: number = 200;

  data = {
    electric: false,
    plumber: false,
    carpenter: false,
    job: false,
    newJob: false,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }

}
