import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleDetailPageRoutingModule } from './schedule-detail-routing.module';

import { ScheduleDetailPage } from './schedule-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduleDetailPageRoutingModule,
  ],
  declarations: [ScheduleDetailPage],
  exports: [ScheduleDetailPage],
})
export class ScheduleDetailPageModule {}
