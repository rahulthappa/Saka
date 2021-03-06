import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-job-request-corp',
  templateUrl: 'job-request-corp.html',
})
export class JobRequestCorpPage {
  navbarTitle = 'Job Request';
  back = "md-menu";
  filter = "md-funnel";

  activeMenu: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.menu1Active();
  }
  menu1Active() {
    this.activeMenu = 'menu1';
    this.menu.enable(true, 'menu1');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobRequestCorpPage');
  }

}
