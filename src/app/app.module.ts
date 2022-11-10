import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CircularSliderModule } from './circular-slider/circular-slider.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    CircularSliderModule,
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
