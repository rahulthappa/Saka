import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobRequestPage } from './job-request';

@NgModule({
  declarations: [
    JobRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(JobRequestPage),
  ],
})
export class JobRequestPageModule {}
