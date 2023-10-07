import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';
import { Router } from '@angular/router';
import { Challenge } from 'src/app/core/models/challenge.model';
import { Observable } from 'rxjs';
import { ConfirmationPopupComponent } from 'src/app/shared/components/confirmation-popup/confirmation-popup.component';
import { HttpParams } from '@angular/common/http';


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
  params!:HttpParams;

  constructor(private challengeService: ChallengeService, private router: Router) { }

  ngOnInit(): void {
    this.params = new HttpParams();

    if(!this.isAdmin) this.params = this.params.set('type', 'active');

    this.refreshChallengeList();
  }

  addChallenge(){
    this.router.navigateByUrl(`/challenges/add`);
  }

  checkProofs(){
    this.router.navigateByUrl(`/challenges/proofs`);
  }

  refreshChallengeList(): void {
    this.challengeList$ = this.challengeService.getChallengeList(this.params);
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
        this.refreshChallengeList();
      });
    }
  }
}
