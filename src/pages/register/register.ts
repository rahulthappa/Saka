import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  templateUrl: 'register.html',
})
export class RegisterPage {
    // tab4Root = IndividualRegisterPage;
    // tab5Root = CoorporateRegisterPage;
      
      register:string='individual'
      constructor() {}
      ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');
      }
}

