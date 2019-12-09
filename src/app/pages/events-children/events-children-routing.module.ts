import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsChildrenPage } from './events-children.page';

const routes: Routes = [
  {
    path: '',
    component: EventsChildrenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsChildrenPageRoutingModule {}
