import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventPageRoutingModule } from './event-routing.module';
import { IonicImageLoader } from 'ionic-image-loader';

import { EventPage } from './event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventPageRoutingModule,
    IonicImageLoader,
  ],
  declarations: [EventPage],
  exports: [EventPage],
})
export class EventPageModule {}
