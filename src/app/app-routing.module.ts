import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClubsComponent} from './clubs/clubs.component';
import {HomeComponent} from './home/home.component';
import {TerrainsComponent} from './terrains/terrains.component';
import {ClubDetailsComponent} from './club-details/club-details.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "clubs", component: ClubsComponent },
  { path: "terrains", component: TerrainsComponent },
  { path: "club-details/:code", component: ClubDetailsComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
