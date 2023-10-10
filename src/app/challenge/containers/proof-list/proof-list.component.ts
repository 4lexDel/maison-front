import { Component } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';
import { Proof } from 'src/app/core/models/proof.model';
import { Observable, lastValueFrom } from 'rxjs';
import { ProofDetail } from 'src/app/core/models/proofDetail.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProofService } from '../../services/proof.service';

@Component({
  selector: 'app-proof-list',
  templateUrl: './proof-list.component.html',
  styleUrls: ['./proof-list.component.css']
})
export class ProofListComponent {
  proofList$!:Observable<ProofDetail[]>;
  proofSelected!:ProofDetail | null;
  domainName!:string;

  constructor(private proofService: ProofService, private authService: AuthService) { 
  }
  
  ngOnInit(): void {
    this.refreshProofList();
    this.domainName = this.authService.getDomainName();
  }

  async refreshProofList(): Promise<void> {
    this.proofList$ = this.proofService.getProofList();
  }

  selectProof(proof:ProofDetail){
    this.proofSelected = proof;
  }

  isProofSelected(proof:ProofDetail){    
    if(!this.proofSelected) return false;
    
    return proof.idProof==this.proofSelected.idProof;
  }

  async acceptProof(){
    if(this.proofSelected){
      await lastValueFrom(this.proofService.acceptProof(this.proofSelected.idProof));
      this.refreshProofList();
      this.proofSelected = null;
    }
  }

  async rejectProof(){
    if(this.proofSelected){
      await lastValueFrom(this.proofService.rejectProof(this.proofSelected.idProof));
      this.refreshProofList();
      this.proofSelected = null;
    }  
  }
}
