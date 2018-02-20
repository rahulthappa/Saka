import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestsCreatedPage } from './requests-created';

@NgModule({
  declarations: [
    RequestsCreatedPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestsCreatedPage),
  ],
})
export class RequestsCreatedPageModule {}
