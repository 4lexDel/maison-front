import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';
import { Router } from '@angular/router';
import { Challenge } from 'src/app/core/models/challenge.model';
import { Observable } from 'rxjs';
import { ConfirmationPopupComponent } from 'src/app/shared/components/confirmation-popup/confirmation-popup.component';


@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit {
  @Input() isAdmin: boolean = false;

  challengeList$!:Observable<Challenge[]>;

  @ViewChild('confirmationPopup') confirmationPopup!: ConfirmationPopupComponent;
  challengeToDelete!:number;

  constructor(private challengeService: ChallengeService, private router: Router) { }

  ngOnInit(): void {
    this.updateChallengeList();
  }

  addChallenge(){
    this.router.navigateByUrl(`/challenges/add`);
  }

  updateChallengeList(): void {
    this.challengeList$ = this.challengeService.getChallengeList();
  }

  getChallengeByID(id:number){
    this.router.navigateByUrl(`/challenges/${id}`);
  }

  updateChallenge(id:number){
    this.router.navigateByUrl(`/challenges/${id}/update`);
  }

  openConfirmationDialog(id:number) {
    this.challengeToDelete = id;
    this.confirmationPopup.open();
  }

  onDeleteConfirmation(confirmed: boolean) {
    if (confirmed) {
      this.challengeService.deleteChallenge(this.challengeToDelete).subscribe((res) => {
        this.updateChallengeList();
      });
    }
  }
}
