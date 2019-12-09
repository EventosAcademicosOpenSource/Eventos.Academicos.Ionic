import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { MenuController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.page.html',
  styleUrls: ['./sponsors.page.scss'],
})
export class SponsorsPage {
  sponsors: [];
  constructor(
    private modalCtrl: ModalController,
    private menu: MenuController,
    private iab: InAppBrowser
  ) {
    this.menu.enable(true);
  }
  close() {
    this.modalCtrl.dismiss();
  }
  openLink(url: string) {
    const browser = this.iab.create(url);
  }
}
