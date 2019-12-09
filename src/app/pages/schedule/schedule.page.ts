import { Component } from '@angular/core';
import { ModalController, MenuController, NavParams } from '@ionic/angular';
import { ScheduleDetailPage } from '../schedule-detail/schedule-detail.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage {
  shownSessions = false;
  speeches = [];
  keys: string[];
  constructor(
    private modalCtrl: ModalController,
    private menu: MenuController,
    private navParams: NavParams,
    private iab: InAppBrowser
  ) {
    this.menu.enable(true);
  }
  ionViewWillEnter() {
    this.speeches = this.navParams.get('speeches');
    this.keys = Object.keys(this.speeches);
    this.shownSessions = true;
  }
  async goToSessionDetail(session) {
    const modal = await this.modalCtrl.create({
      component: ScheduleDetailPage,
      componentProps: {
        session,
      },
    });
    return await modal.present();
  }
  close() {
    this.shownSessions = false;
    this.speeches = [];
    this.modalCtrl.dismiss();
  }
}
