import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MenuController, ModalController, NavParams } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpService } from 'src/app/services/http.service';
import { SchedulePage } from '../schedule/schedule.page';
import { SpeakersPage } from '../speakers/speakers.page';
import { SponsorsPage } from '../sponsors/sponsors.page';
import { EventsChildrenPage } from '../events-children/events-children.page';
import { NotificationsPage } from '../notifications/notifications.page';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage {
  id: number;
  event: any = [];
  image: '';
  status: boolean;
  @ViewChild('header', { static: false }) headerImage: ElementRef;

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private renderer: Renderer2,
    private menu: MenuController,
    private http: HttpService,
    private iab: InAppBrowser
  ) {
    this.menu.enable(true);
  }
  ionViewWillEnter() {
    const coords = this.navParams.get('coords');
    this.event = this.navParams.get('event');

    this.renderer.setStyle(
      this.headerImage.nativeElement,
      'transform',
      `translate3d(0, ${coords.y - 56}px, 0) scale3d(0.9, 0.9, 1)`
    );
    this.renderer.setStyle(
      this.headerImage.nativeElement,
      'transition',
      '0.5s ease-in-out'
    );

    setTimeout(() => {
      this.renderer.removeStyle(this.headerImage.nativeElement, 'transform');
    }, 50);
    this.makeEvent();
  }
  async makeEvent() {
    this.status = true;
    this.http.getEvent(this.event.id).subscribe(res => {
      this.event = res;
      this.status = false;
    });
  }
  async touchSchedule(speeches) {
    const modal = await this.modalCtrl.create({
      component: SchedulePage,
      componentProps: {
        speeches,
      },
    });
    return await modal.present();
  }
  async touchSpeakers(speakers) {
    const modal = await this.modalCtrl.create({
      component: SpeakersPage,
      componentProps: {
        speakers,
      },
    });
    return await modal.present();
  }
  async touchSponsors(sponsors) {
    const modal = await this.modalCtrl.create({
      component: SponsorsPage,
      componentProps: {
        sponsors,
      },
    });
    return await modal.present();
  }
  async touchEventChildren(events) {
    const modal = await this.modalCtrl.create({
      component: EventsChildrenPage,
      componentProps: {
        events,
      },
    });
    return await modal.present();
  }

  async touchNotifications(notifications) {
    const modal = await this.modalCtrl.create({
      component: NotificationsPage,
      componentProps: {
        notifications,
      },
    });
    return await modal.present();
  }
  isEmptyObject(object) {
    if (typeof object === 'undefined') {
      return false;
    }
    return !(Object.keys(object).length === 0);
  }
  close() {
    this.modalCtrl.dismiss();
  }
  openLink(url: string) {
    const browser = this.iab.create(url);
  }
}
