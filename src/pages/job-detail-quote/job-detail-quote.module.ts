import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobDetailQuotePage } from './job-detail-quote';

@NgModule({
  declarations: [
    JobDetailQuotePage,
  ],
  imports: [
    IonicPageModule.forChild(JobDetailQuotePage),
  ],
  entryComponents: [
    JobDetailQuotePage,
  ]
})
export class JobDetailQuotePageModule {}
