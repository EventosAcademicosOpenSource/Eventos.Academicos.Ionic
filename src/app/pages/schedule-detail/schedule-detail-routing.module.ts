import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleDetailPage } from './schedule-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduleDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleDetailPageRoutingModule {}
