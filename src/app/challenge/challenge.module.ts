import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeDetailComponent } from './components/challenge-detail/challenge-detail.component';
import { ChallengeListComponent } from './containers/challenge-list/challenge-list.component';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ChallengeDetailComponent,
    ChallengeListComponent
  ],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
    HttpClientModule,
    RouterModule,
    SharedModule
  ],
  exports :[
    ChallengeListComponent,
    ChallengeDetailComponent
  ]
})
export class ChallengeModule { }
