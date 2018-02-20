import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPasswordPage } from './modal-password';

@NgModule({
  declarations: [
    ModalPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPasswordPage),
  ],
})
export class ModalPasswordPageModule {}
