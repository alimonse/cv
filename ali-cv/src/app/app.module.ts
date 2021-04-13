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
import { CardHabilidadComponent } from './componentes/card-habilidad/card-habilidad.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import { CardExperienciaComponent } from './componentes/card-experiencia/card-experiencia.component';


@NgModule({
  declarations: [
    AppComponent,
    CardHabilidadComponent,
    CardExperienciaComponent
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
    CardModule,
    AngularFireModule.initializeApp(environment.firebase),



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
