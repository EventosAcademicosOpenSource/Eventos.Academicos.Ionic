import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeakersDetailPage } from './speakers-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SpeakersDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeakersDetailPageRoutingModule {}
