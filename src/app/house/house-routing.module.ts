import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseListComponent } from './containers/house-list/house-list.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';
import { HouseUpdateComponent } from './components/house-update/house-update.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { HouseAddingComponent } from './components/house-adding/house-adding.component';

const routes: Routes = [
  { path: '', component:  HouseListComponent},
  { path: 'add', component:  HouseAddingComponent, canActivate: [AuthGuard]},
  { path: ':id/update', component:  HouseUpdateComponent, canActivate: [AuthGuard]},
  { path: ':id', component:  HouseDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseRoutingModule {}