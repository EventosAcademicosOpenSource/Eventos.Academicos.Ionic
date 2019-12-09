import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-events-children',
  templateUrl: './events-children.page.html',
  styleUrls: ['./events-children.page.scss'],
})
export class EventsChildrenPage {
  events: [];
  constructor(private modalCtrl: ModalController) {}
  close() {
    this.modalCtrl.dismiss();
  }
}
