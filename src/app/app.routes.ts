// import { NgModule } from '@angular/core';
// import { RouterModule, Routes, RouterLink, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationEnd } from '@angular/router';
// import { MyApp } from './app.component';
// / import { RegisterPage } from '../pages/register/register';
// // import { LoginPage } from '../pages/login/login';
// // import { JobRequestEmptyPage } from '../pages/job-request-empty/job-request-empty';
// // import { MenuPage } from '../pages/menu/menu';
// // import { AddjobPage } from '../pages/addjob/addjob';
// // import { FilterPage } from '../pages/filter/filter';
// // import { JobHistoryPage } from '../pages/job-history/job-history';
// // import { AddAddressPage } from '../pages/add-address/add-address';
// // import { AddressListPage } from '../pages/address-list/address-list';
// // import { JobDetailPage } from '../pages/job-detail/job-detail';
// // import { TabsPage } from '../pages/tabs/tabs';
// // import { JobDetailQuotePage } from '../pages/job-detail-quote/job-detail-quote';
// // import { JobAcceptedPage } from '../pages/job-accepted/job-accepted';
// // import { MakePaymentPage } from '../pages/make-payment/make-payment';
// // import { ProfilePage } from '../pages/profile/profile';
// // import { ProfileEditPage } from '../pages/profile-edit/profile-edit';
// // import { MessageListPage } from '../pages/message-list/message-list';
// // import { NotificationPage } from '../pages/notification/notification';
// // import { RequestsCreatedPage } from '../pages/requests-created/requests-created';
// // import { FilterCorpPage } from '../pages/filter-corp/filter-corp';
// // import { PaymentHistoryPage } from '../pages/payment-history/payment-history';
// // import { JobRequestPage } from '../pages/job-request/job-request';
// // import { JobRequestCorpPage } from '../pages/job-request-corp/job-request-corp';

// const appRoutes: Routes = [
//     { path: 'login', component: LoginComponent, resolve: { login: LoginResolver } },

//     {
//         path: '',
//         component: MasterComponent,
//         children: [
//             { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
//             { path: 'child', component: ChildComponent },
//             { path: 'childinfo/:id', component: ChildInfoComponent },
//             { path: 'dashboard', component: DashboardComponent },
//             { path: 'addchild', component: ChildComponent, outlet: 'childAdd' },
//             { path: 'about', component: AboutComponent },
//             { path: 'childlist', component: ChildlistComponent },
//             { path: 'assignstafftochildmodal', component: AssignstafftochildmodalComponent },
//             { path: 'childprofiledeficits', component: ChildprofiledeficitsComponent },
//             { path: 'goaltargets', component: GoaltargetsComponent },
//             { path: 'addgoalmodal', component: AddgoalmodalComponent },
//             { path: 'goaldetail', component: GoaldetailComponent },
//             { path: 'targetdetailsidebar', component: TargetdetailsidebarComponent },
//             { path: 'modaladdtarget', component: ModaladdtargetComponent },
//         ], resolve: { access: AccessResolver }
//     },
//     { path: '**', component: PagenotfoundComponent }
// ];

// @NgModule({
//     imports: [
//         RouterModule.forRoot(appRoutes)
//     ],
//     exports: [RouterModule],
//     providers: [
//         LoginResolver,
//         AccessResolver
//     ]
// })

// export class AppRoutingModule { }