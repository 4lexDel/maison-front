import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Challenge } from 'src/app/core/models/challenge.model';
import { ChallengeService } from '../../services/challenge.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.css']
})
export class ChallengeDetailComponent implements OnInit {
  challenge$!:Observable<Challenge>;

  constructor(private challengeService: ChallengeService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    let challengeId = this.activatedRoute.snapshot.params['id'];
    
    this.challenge$ = this.challengeService.getChallengeByID(challengeId);  
    
    // this.house$.subscribe(house => {
    //   console.log(house);
    // });
  }

}
