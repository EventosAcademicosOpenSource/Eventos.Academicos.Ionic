import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage {
  notifications: [];
  constructor(private modalCtrl: ModalController) {}
  close() {
    this.modalCtrl.dismiss();
  }
}
