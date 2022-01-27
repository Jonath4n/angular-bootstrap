import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SpeakersComponent } from './speakers/speakers.component';



@NgModule({
  declarations: [
    MainComponent,
    SpeakersComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
