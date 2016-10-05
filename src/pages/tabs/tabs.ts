import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ManagePage } from '../manage/manage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public dashboardRoot: any;
  public alertRoot: any;
  public manageRoot: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.dashboardRoot = HomePage;
    this.alertRoot = AboutPage;
    this.manageRoot = ManagePage;
  }
}


