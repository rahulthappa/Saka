import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

/**
 * Generated class for the JobRequestEmptyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-request-empty',
  templateUrl: 'job-request-empty.html',
})
export class JobRequestEmptyPage {

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
    console.log('ionViewDidLoad JobRequestEmptyPage');
  }

}
