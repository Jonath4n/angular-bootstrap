import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DopresenterComponent } from './dopresenter/dopresenter.component';



@NgModule({
  declarations: [
    MainComponent,
    SpeakersComponent,
    ScheduleComponent,
    DopresenterComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
