import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobRequestEmptyPage } from './job-request-empty';

@NgModule({
  declarations: [
    JobRequestEmptyPage,
  ],
  imports: [
    IonicPageModule.forChild(JobRequestEmptyPage),
  ],
  entryComponents: [
    JobRequestEmptyPage,
  ]
})
export class JobRequestEmptyPageModule {}
