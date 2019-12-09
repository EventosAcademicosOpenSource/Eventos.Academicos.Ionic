import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsChildrenPageRoutingModule } from './events-children-routing.module';

import { EventsChildrenPage } from './events-children.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsChildrenPageRoutingModule,
  ],
  declarations: [EventsChildrenPage],
  exports: [EventsChildrenPage],
})
export class EventsChildrenPageModule {}
