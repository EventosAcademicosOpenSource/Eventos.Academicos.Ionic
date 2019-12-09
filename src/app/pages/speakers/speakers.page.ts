import { Component } from '@angular/core';
import { ModalController, NavParams, MenuController } from '@ionic/angular';
import { SpeakersDetailPage } from '../speakers-detail/speakers-detail.page';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})
export class SpeakersPage {
  speakers: [];
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private menu: MenuController
  ) {
    this.menu.enable(true);
  }
  ionViewWillEnter() {
    this.speakers = this.navParams.get('speakers');
  }
  close() {
    this.modalCtrl.dismiss();
  }
  async touchSpeakDetail(speak) {
    const modal = await this.modalCtrl.create({
      component: SpeakersDetailPage,
      componentProps: {
        speak,
      },
    });
    return await modal.present();
  }
}
