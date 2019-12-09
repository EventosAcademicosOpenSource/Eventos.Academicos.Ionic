import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { IonicImageLoader } from 'ionic-image-loader';

import { EventPage } from '../event/event.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SchedulePage } from '../schedule/schedule.page';
import { ScheduleDetailPage } from '../schedule-detail/schedule-detail.page';
import { SpeakersPage } from '../speakers/speakers.page';
import { SpeakersDetailPage } from '../speakers-detail/speakers-detail.page';
import { SponsorsPage } from '../sponsors/sponsors.page';
import { EventsChildrenPage } from '../events-children/events-children.page';
import { NotificationsPage } from '../notifications/notifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    IonicImageLoader,
    PipesModule,
  ],
  declarations: [
    DashboardPage,
    EventPage,
    SchedulePage,
    ScheduleDetailPage,
    SpeakersPage,
    SpeakersDetailPage,
    SponsorsPage,
    EventsChildrenPage,
    NotificationsPage,
  ],
  entryComponents: [
    EventPage,
    SchedulePage,
    ScheduleDetailPage,
    SpeakersPage,
    SpeakersDetailPage,
    SponsorsPage,
    EventsChildrenPage,
    NotificationsPage,
  ],
})
export class DashboardPageModule {}
