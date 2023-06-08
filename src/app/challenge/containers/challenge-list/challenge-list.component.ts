import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';
import { Router } from '@angular/router';
import { Challenge } from 'src/app/core/models/challenge.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {
  challengeList$!:Observable<Challenge[]>;

  constructor(private challengeService: ChallengeService, private router: Router) { }

  ngOnInit(): void {
    this.challengeList$ = this.challengeService.getChallengeList();
  }

  getChallengeByID(id:number){
    this.router.navigateByUrl(`/challenges/${id}`);
  }
}
