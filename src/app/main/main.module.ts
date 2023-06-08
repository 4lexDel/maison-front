import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { AdminComponent } from './containers/admin/admin.component';
import { HouseModule } from '../house/house.module';
import { ChallengeModule } from '../challenge/challenge.module';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    HouseModule,
    ChallengeModule,
    MainRoutingModule
  ]
})
export class MainModule { }
