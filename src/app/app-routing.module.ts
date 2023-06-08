import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/containers/home/home.component';
import { AdminComponent } from './main/containers/admin/admin.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },//canActivate: [AuthGuard]
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'houses', loadChildren: () => import('./house/house.module').then(m => m.HouseModule) },
  { path: 'challenges', loadChildren: () => import('./challenge/challenge.module').then(m => m.ChallengeModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '**', component: HomeComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
