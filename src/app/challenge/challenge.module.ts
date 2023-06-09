import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeDetailComponent } from './components/challenge-detail/challenge-detail.component';
import { ChallengeListComponent } from './containers/challenge-list/challenge-list.component';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChallengeUpdateComponent } from './components/challenge-update/challenge-update.component';
import { SendProofComponent } from './components/send-proof/send-proof.component';
import { ChallengeAddingComponent } from './components/challenge-adding/challenge-adding.component';
import { ProofAddingComponent } from './components/proof-adding/proof-adding.component';



@NgModule({
  declarations: [
    ChallengeDetailComponent,
    ChallengeListComponent,
    ChallengeUpdateComponent,
    SendProofComponent,
    ChallengeAddingComponent,
    ProofAddingComponent
  ],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
  ],
  exports :[
    ChallengeListComponent,
    ChallengeDetailComponent
  ]
})
export class ChallengeModule { }
