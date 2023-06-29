import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseListComponent } from './containers/house-list/house-list.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';
import { HouseRoutingModule } from './house-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HouseUpdateComponent } from './components/house-update/house-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HouseAddingComponent } from './components/house-adding/house-adding.component';



@NgModule({
  declarations: [
    HouseListComponent,
    HouseDetailComponent,
    HouseUpdateComponent,
    HouseAddingComponent
  ],
  imports: [
    CommonModule,
    HouseRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
  ],
  exports :[
    HouseListComponent,
    HouseDetailComponent
  ],
})
export class HouseModule { }
