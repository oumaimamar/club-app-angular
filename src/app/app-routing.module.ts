import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClubsComponent} from './clubs/clubs.component';
import {HomeComponent} from './home/home.component';
import {TerrainsComponent} from './terrains/terrains.component';
import {ClubDetailsComponent} from './club-details/club-details.component';
import {NewReservComponent} from './new-reserv/new-reserv.component';
import {NewTerrainComponent} from './new-terrain/new-terrain.component';
import {NavComponent} from './nav/nav.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [

  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  {
    path: "admin",
    component: NavComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "clubs", component: ClubsComponent },
      { path: "terrains", component: TerrainsComponent },
      { path: "club-details/:code", component: ClubDetailsComponent },
      { path: "new-terrain", component: NewTerrainComponent },
      { path: "new-terrain/:code", component: NewTerrainComponent },
      { path: "new-reserv", component: NewReservComponent },
    ],
  },
  { path: "**", redirectTo: "" }, // Redirect unknown paths to the login page





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
