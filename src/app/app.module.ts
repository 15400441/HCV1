import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ManagePage } from '../pages/manage/manage';
import { BrokerDetailPage } from '../pages/manageBroker/brokerDetail';
import { ManageBrokerPage } from '../pages/manageBroker/manageBroker';
import { ManageUserPage } from '../pages/manageUser/manageUser';
import { BrokerService } from '../providers/broker';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ManagePage,
    BrokerDetailPage,
    ManageBrokerPage,
    ManageUserPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ManagePage,
    BrokerDetailPage,
    ManageBrokerPage,
    ManageUserPage
  ],
  providers: [BrokerService]
})
export class AppModule {}
