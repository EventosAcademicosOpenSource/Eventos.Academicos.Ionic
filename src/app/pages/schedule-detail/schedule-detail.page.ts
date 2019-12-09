import { Component } from '@angular/core';
import { ModalController, MenuController, NavParams } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.page.html',
  styleUrls: ['./schedule-detail.page.scss'],
})
export class ScheduleDetailPage {
  session: {};
  constructor(
    private modalCtrl: ModalController,
    private menu: MenuController,
    private navParams: NavParams,
    private iab: InAppBrowser
  ) {
    this.menu.enable(true);
  }
  ionViewWillEnter() {
    this.session = this.navParams.get('session');
  }
  openLink(url: string) {
    const browser = this.iab.create(url);
  }
  close() {
    this.modalCtrl.dismiss();
  }
}
