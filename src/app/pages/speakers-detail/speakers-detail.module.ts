import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeakersDetailPageRoutingModule } from './speakers-detail-routing.module';

import { SpeakersDetailPage } from './speakers-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeakersDetailPageRoutingModule,
  ],
  declarations: [SpeakersDetailPage],
  exports: [SpeakersDetailPage],
})
export class SpeakersDetailPageModule {}
