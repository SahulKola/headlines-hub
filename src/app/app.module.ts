import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';
import { CardContainerComponent } from './card-container/card-container.component';

@NgModule({
  declarations: [AppComponent, NavComponent, CardComponent, CardContainerComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
