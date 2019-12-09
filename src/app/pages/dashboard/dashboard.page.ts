import { Component } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { EventPage } from '../event/event.page';
import { myFadeInAnimation } from '../../animations/fade-in';
import { AlertService } from 'src/app/services/alert.service';

import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  eventsList: Array<any> = [];
  status: boolean;
  constructor(
    private menu: MenuController,
    private api: HttpService,
    private modalCtrl: ModalController,
    private alertService: AlertService
  ) {
    this.menu.enable(true);
  }
  ionViewWillEnter() {
    this.makeRequest();
  }
  makeRequest() {
    this.status = true;
    this.api.getEvents().subscribe(res => {
      this.eventsList = res.events;
      this.status = false;
    });
  }
  like(event) {
    event.like = !event.like;
    if (event.like) {
      this.api.postLikeEvent(event.id).subscribe(() => {
        this.alertService.presentToastBottom(
          'Notificação ativa para este evento'
        );
      });
    } else {
      this.api.postUnlikeEvent(event.id).subscribe(() => {
        this.alertService.presentToastBottom(
          'Notificação desativada para este evento'
        );
      });
    }
  }
  async eventDetail(event, ev) {
    const modal = await this.modalCtrl.create({
      component: EventPage,
      enterAnimation: myFadeInAnimation,
      componentProps: {
        event,
        coords: {
          x: ev.target.x,
          y: ev.target.y,
        },
      },
    });
    return await modal.present();
  }
  doRefresh(event) {
    this.makeRequest();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
