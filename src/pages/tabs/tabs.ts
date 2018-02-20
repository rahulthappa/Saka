import { Component } from '@angular/core';

// import {Chat } from '../chat/chat';

// import { } from '../timeline/timeline';
import { JobDetailPage } from '../job-detail/job-detail';




@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = JobDetailPage;
  // tab2Root = MessagesPage;
  // tab3Root = timeline;

  constructor() {

  }
}
