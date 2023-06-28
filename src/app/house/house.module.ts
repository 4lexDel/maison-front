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
import { MatButtonModule, MatDialog, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    HouseListComponent,
    HouseDetailComponent,
    HouseUpdateComponent
  ],
  imports: [
    CommonModule,
    HouseRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports :[
    HouseListComponent,
    HouseDetailComponent
  ],
})
export class HouseModule { }
