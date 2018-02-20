import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalDeclinePage } from './modal-decline';

@NgModule({
  declarations: [
    ModalDeclinePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalDeclinePage),
  ],
})
export class ModalDeclinePageModule {}
