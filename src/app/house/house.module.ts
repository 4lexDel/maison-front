import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseListComponent } from './containers/house-list/house-list.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';
import { HouseRoutingModule } from './house-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    HouseListComponent,
    HouseDetailComponent
  ],
  imports: [
    CommonModule,
    HouseRoutingModule,
    HttpClientModule,
    RouterModule,
    SharedModule
  ],
  exports :[
    HouseListComponent,
    HouseDetailComponent
  ]
})
export class HouseModule { }
