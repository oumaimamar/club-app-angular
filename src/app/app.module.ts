import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClubsComponent } from './clubs/clubs.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { TerrainsComponent } from './terrains/terrains.component';
import { ClubDetailsComponent } from './club-details/club-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubsComponent,
    HomeComponent,
    NavComponent,
    TerrainsComponent,
    ClubDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
