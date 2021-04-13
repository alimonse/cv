import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {TooltipModule} from "primeng/tooltip";
import {ButtonModule} from "primeng/button";
import {TabViewModule} from "primeng/tabview";
import {SwiperModule} from "swiper/angular";
import {MatExpansionModule} from "@angular/material/expansion";
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    TooltipModule,
    ButtonModule,
    TabViewModule,
    SwiperModule,
    MatExpansionModule,
    CardModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
