import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Challenge } from 'src/app/core/models/challenge.model';
import { ChallengeService } from '../../services/challenge.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.css']
})
export class ChallengeDetailComponent implements OnInit {
  challenge$!:Observable<Challenge>;
  challengeId!:number;

  constructor(private challengeService: ChallengeService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.challengeId = this.activatedRoute.snapshot.params['id'];
    
    this.challenge$ = this.challengeService.getChallengeByID(this.challengeId);  
    
    // this.house$.subscribe(house => {
    //   console.log(house);
    // });
  }

  sendProof(challengeId:number){
    this.router.navigateByUrl(`/challenges/${this.challengeId}/send-proof`);
  }
}
