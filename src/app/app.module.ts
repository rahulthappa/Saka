import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//import { AboutPage } from '../pages/about/about';
//import { ContactPage } from '../pages/contact/contact';
//import { HomePage } from '../pages/home/home';
//import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { JobRequestEmptyPage } from '../pages/job-request-empty/job-request-empty';
//import { MenuPage } from '../pages/menu/menu';
import { AddjobPage } from '../pages/addjob/addjob';
import { AddJobCorpPage } from '../pages/add-job-corp/add-job-corp';
import { FilterPage } from '../pages/filter/filter';
import { JobHistoryPage } from '../pages/job-history/job-history';
import { AddAddressPage } from '../pages/add-address/add-address';
import { AddressListPage } from '../pages/address-list/address-list';
import { JobDetailPage } from '../pages/job-detail/job-detail';
import { JobDetailQuotePage } from '../pages/job-detail-quote/job-detail-quote';

import { ModalPage } from '../pages/modal/modal';
import { ModalPasswordPage } from '../pages/modal-password/modal-password';
import { ModalPaymentPage } from '../pages/modal-payment/modal-payment';
import { ModalDeclinePage } from '../pages/modal-decline/modal-decline';
import { ModalReviewPage } from '../pages/modal-review/modal-review';

import { JobAcceptedPage } from '../pages/job-accepted/job-accepted';
import { MakePaymentPage } from '../pages/make-payment/make-payment';
import { ProfilePage } from '../pages/profile/profile';
import { PopoverPage } from '../pages/popover/popover';
import { ProfileEditPage } from '../pages/profile-edit/profile-edit';
import { MessageListPage } from '../pages/message-list/message-list';
import { NotificationPage } from '../pages/notification/notification';
import { RequestsCreatedPage } from '../pages/requests-created/requests-created';
import { FilterCorpPage } from '../pages/filter-corp/filter-corp';
import { PaymentHistoryPage } from '../pages/payment-history/payment-history';
import { JobRequestPage } from '../pages/job-request/job-request';
import { JobRequestCorpPage } from '../pages/job-request-corp/job-request-corp';

// import { MODULES, PROVIDERS } from './app.imports';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { Deeplinks } from '@ionic-native/deeplinks';
@NgModule({
  declarations: [
    MyApp,
    //AboutPage,
    //ContactPage,
    //HomePage,
    //TabsPage,
    LoginPage,
    RegisterPage,
    JobRequestEmptyPage,
    //MenuPage,
    AddjobPage,
    FilterPage,
    JobHistoryPage,
    AddAddressPage,
    AddressListPage,
    JobDetailPage,
    JobDetailQuotePage,
    ModalPage,
    JobAcceptedPage,
    MakePaymentPage,
    ProfilePage,
    PopoverPage,
    ProfileEditPage,
    MessageListPage,
    NotificationPage,
    RequestsCreatedPage,
    FilterCorpPage,
    PaymentHistoryPage,
    JobRequestPage,
    JobRequestCorpPage,
    AddJobCorpPage,
    ModalPasswordPage,
    ModalPaymentPage,
    ModalDeclinePage,
    ModalReviewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true,
      preloadModules: true
    },{
      links: [
       
       { component: LoginPage, name: 'login', segment: 'login' },
       { component: RegisterPage, name: 'register', segment: 'register' },
       { component: JobRequestCorpPage, name: 'jobreqcorp', segment: 'jobreqcorp' },
       { component: JobRequestPage, name: 'jobreq', segment: 'jobreq' },
       { component: FilterPage, name: 'filter', segment: 'filter' },
       { component: FilterCorpPage, name: 'filtercorp', segment: 'filtercorp' },
       { component: AddjobPage, name: 'jobform', segment: 'jobform' },
       { component: RequestsCreatedPage, name: 'Requestcreated', segment: 'requestcreated' },
       { component: JobHistoryPage, name: 'jobhistory', segment: 'jobhistory' },
       { component: ProfilePage, name: 'profile', segment: 'profile' },
       { component: ProfileEditPage, name: 'profiledit', segment: 'profiledit' },
       { component: NotificationPage, name: 'notification', segment: 'notification' },
       { component: MakePaymentPage, name: 'addcard', segment: 'addcard' },
       { component: JobDetailQuotePage, name: 'jobdetailq', segment: 'jobdetailq' },
       { component: JobDetailPage, name: 'jobdetail', segment: 'jobdetail' },
       { component: AddJobCorpPage, name: 'jobformcorp', segment: 'jobformcorp' },
       { component: JobAcceptedPage, name: 'markcomplete', segment: 'markcomplete' },
       //{ component: TabsPage, name: 'tabs', segment: 'tabs' }
     ]
   }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //AboutPage,
    //ContactPage,
    //HomePage,
    //TabsPage,
    LoginPage,
    RegisterPage,
    JobRequestEmptyPage,
    //MenuPage, 
    AddjobPage,
    FilterPage,
    JobHistoryPage,
    AddAddressPage,
    AddressListPage,
    JobDetailPage,
    JobDetailQuotePage,
    ModalPage,
    JobAcceptedPage,
    MakePaymentPage,
    ProfilePage,
    PopoverPage,
    ProfileEditPage,
    MessageListPage,
    NotificationPage,
    RequestsCreatedPage,
    FilterCorpPage,
    PaymentHistoryPage,
    JobRequestPage,
    JobRequestCorpPage,
    AddJobCorpPage,
    ModalPasswordPage,
    ModalPaymentPage,
    ModalDeclinePage,
    ModalReviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Deeplinks,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
export class FloatingPage { }
