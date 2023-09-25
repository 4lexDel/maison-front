import { Component } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';
import { Proof } from 'src/app/core/models/proof.model';
import { Observable, lastValueFrom } from 'rxjs';
import { ProofDetail } from 'src/app/core/models/proofDetail.model';

@Component({
  selector: 'app-proof-list',
  templateUrl: './proof-list.component.html',
  styleUrls: ['./proof-list.component.css']
})
export class ProofListComponent {
  proofList$!:Observable<ProofDetail[]>;

  constructor(private challengeService: ChallengeService) { }

  ngOnInit(): void {
    this.updateProofList();
  }

  async updateProofList(): Promise<void> {
    this.proofList$ = this.challengeService.getProofList();
  }
}
