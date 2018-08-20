import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventinnerPage } from './eventinner';

@NgModule({
  declarations: [
    EventinnerPage,
  ],
  imports: [
    IonicPageModule.forChild(EventinnerPage),
  ],
})
export class EventinnerPageModule {}
