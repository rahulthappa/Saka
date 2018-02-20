import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Deeplinks } from '@ionic-native/deeplinks';

import { JobRequestPage } from '../pages/job-request/job-request';
//import { AboutPage } from '../pages/about/about';
//import { ContactPage } from '../pages/contact/contact';
//import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
// import { JobRequestEmptyPage } from '../pages/job-request-empty/job-request-empty';
// import { MenuPage } from '../pages/menu/menu';
 import { AddjobPage } from '../pages/addjob/addjob';
 import { AddJobCorpPage } from '../pages/add-job-corp/add-job-corp';
 import { FilterPage } from '../pages/filter/filter';
 import { FilterCorpPage } from '../pages/filter-corp/filter-corp';
 import { JobHistoryPage } from '../pages/job-history/job-history';
// import { AddAddressPage } from '../pages/add-address/add-address';
// import { AddressListPage } from '../pages/address-list/address-list';
 import { JobDetailPage } from '../pages/job-detail/job-detail';
 import { TabsPage } from '../pages/tabs/tabs';
 import { JobDetailQuotePage } from '../pages/job-detail-quote/job-detail-quote';
  import { JobAcceptedPage } from '../pages/job-accepted/job-accepted';
  import { MakePaymentPage } from '../pages/make-payment/make-payment';
  import { ProfilePage } from '../pages/profile/profile';
  import { ProfileEditPage } from '../pages/profile-edit/profile-edit';
// import { MessageListPage } from '../pages/message-list/message-list';
  import { NotificationPage } from '../pages/notification/notification';
  import { RequestsCreatedPage } from '../pages/requests-created/requests-created';
 
// import { PaymentHistoryPage } from '../pages/payment-history/payment-history';
 import { JobRequestCorpPage } from '../pages/job-request-corp/job-request-corp';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  // rootPage:any = RegisterPage;
  // rootPage:any = JobRequestEmptyPage;
  // rootPage:any = AddjobPage;
  // rootPage:any = MenuPage;
  // rootPage:any = FilterPage;
  // rootPage:any = JobHistoryPage;
  // rootPage:any = AddAddressPage;
  // rootPage:any = AddressListPage;
  // rootPage:any = TabsPage;
  // rootPage:any = JobAcceptedPage;
  // rootPage:any = MakePaymentPage;
  // rootPage:any = ProfilePage;
  // rootPage:any = ProfileEditPage;
  // rootPage:any = NotificationPage;
  // rootPage:any = RequestsCreatedPage;
  // rootPage:any = FilterCorpPage;
  // rootPage:any = PaymentHistoryPage;
  // rootPage: any = JobRequestPage;
  // rootPage:any = JobRequestCorpPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private deeplinks: Deeplinks) {
    this.deeplinks.route({
      '/login': LoginPage,
      '/Register': RegisterPage,
      '/jobreqcorp': JobRequestCorpPage,
      '/jobreq': JobRequestPage,
      '/filtercorp': FilterCorpPage,
      '/filter': FilterPage,
      '/jobform': AddjobPage,
      '/jobformcorp':AddJobCorpPage,
      '/requestcreated':RequestsCreatedPage,
      '/jobhistory':JobHistoryPage,
      '/profile':ProfilePage,
      '/profiledit':ProfileEditPage,
      '/notification':NotificationPage,
      '/addcard': MakePaymentPage,
      '/jobdetailq': JobDetailQuotePage,
      '/jobdetail': JobDetailPage,
      '/markcomplete':JobAcceptedPage,
      '/tabs': TabsPage
    }).subscribe((match) => {
      // match.$route - the route we matched, which is the matched entry from the arguments to route()
      // match.$args - the args passed in the link
      // match.$link - the full link data
      console.log('Successfully matched route', match);
    }, (nomatch) => {
      // nomatch.$link - the full link data
      console.error('Got a deeplink that didn\'t match', nomatch);
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

