import { Component } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';
import { Proof } from 'src/app/core/models/proof.model';
import { Observable, lastValueFrom } from 'rxjs';
import { ProofDetail } from 'src/app/core/models/proofDetail.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-proof-list',
  templateUrl: './proof-list.component.html',
  styleUrls: ['./proof-list.component.css']
})
export class ProofListComponent {
  proofList$!:Observable<ProofDetail[]>;
  proofSelected!:ProofDetail;
  domainName!:string;

  constructor(private challengeService: ChallengeService, authService: AuthService) { 
    this.domainName = authService.getDomainName();
  }

  ngOnInit(): void {
    this.updateProofList();
  }

  async updateProofList(): Promise<void> {
    this.proofList$ = this.challengeService.getProofList();
  }

  selectProof(proof:ProofDetail){
    this.proofSelected = proof;
  }

  isProofSelected(proof:ProofDetail){    
    if(! this.proofSelected) return false;
    
    return proof.idProof==this.proofSelected.idProof;
  }
}
