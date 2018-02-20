import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-message-list',
  templateUrl: 'message-list.html',
})
export class MessageListPage {
  navbarTitle = 'Message';
  back = "md-arrow-back";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageListPage');
  }

}
