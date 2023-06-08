import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeListComponent } from './containers/challenge-list/challenge-list.component';
import { ChallengeDetailComponent } from './components/challenge-detail/challenge-detail.component';

const routes: Routes = [
    { path: '', component:  ChallengeListComponent},
    { path: ':id', component:  ChallengeDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeRoutingModule {}