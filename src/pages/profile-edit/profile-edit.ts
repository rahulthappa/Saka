import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { ModalController } from 'ionic-angular'; 
import { ActionSheetController } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html',
})
export class ProfileEditPage {

  navbarTitle = 'Profile';
  back = "md-menu";
  save = "Save";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController) {
  }

  openBasicModal() {
    let myModal = this.modalCtrl.create(ModalPage);
    myModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileEditPage');
  }

  openMenu () {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Upload Photo',
          role: '',
          handler: () => {
            console.log('Upload clicked');
          }
        },{
          text: 'Delete Photo',
          handler: () => {
            console.log('Delete clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
