import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeListComponent } from './containers/challenge-list/challenge-list.component';
import { ChallengeDetailComponent } from './components/challenge-detail/challenge-detail.component';
import { ChallengeUpdateComponent } from './components/challenge-update/challenge-update.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ChallengeAddingComponent } from './components/challenge-adding/challenge-adding.component';
import { ProofAddingComponent } from './components/proof-adding/proof-adding.component';
import { ProofListComponent } from './containers/proof-list/proof-list.component';

const routes: Routes = [
  { path: '', component:  ChallengeListComponent},
  { path: 'add', component:  ChallengeAddingComponent, canActivate: [AuthGuard]},
  // { path: 'test-img', component:  TestImgInputComponent},
  { path: 'proofs', component:  ProofListComponent, canActivate: [AuthGuard]},
  { path: ':id/update', component:  ChallengeUpdateComponent, canActivate: [AuthGuard]},
  { path: ':id/send-proof', component:  ProofAddingComponent},
  { path: ':id', component:  ChallengeDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeRoutingModule {}