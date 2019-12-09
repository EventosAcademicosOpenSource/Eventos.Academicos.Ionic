import { Component } from '@angular/core';
import { NavParams, ModalController, MenuController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-speakers-detail',
  templateUrl: './speakers-detail.page.html',
  styleUrls: ['./speakers-detail.page.scss'],
})
export class SpeakersDetailPage {
  speak: {};
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private menu: MenuController,
    private iab: InAppBrowser
  ) {
    this.menu.enable(true);
  }

  ionViewWillEnter() {
    this.speak = this.navParams.get('speak');
  }
  close() {
    this.modalCtrl.dismiss();
  }
  openLink(url: string) {
    const browser = this.iab.create(url);
  }
}
