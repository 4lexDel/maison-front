import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.service';
import { Proof } from 'src/app/core/models/proof.model';
import { ProofDetail } from 'src/app/core/models/proofDetail.model';

@Injectable({
  providedIn: 'root'
})
export class ProofService {
  domainName!:string; 

  constructor(private http: HttpClient, private authService: AuthService) { 
    this.domainName = authService.getDomainName();
  }

  getProofList(): Observable<ProofDetail[]> {
    return this.http.get<ProofDetail[]>(`${this.domainName}/proofs`);
  }

  getProofByID(id:number): Observable<Proof>{
    return this.http.get<Proof>(`${this.domainName}/proofs/${id}`);
  }

  addProof(createdProof: any): Promise<string> {
    return new Promise(async (resolve, reject) => {
      var source$ = this.http.post(`${this.domainName}/proofs/`, createdProof).subscribe(
        (response) => {
          resolve("1");
        },
        (err) => {
          console.log(err.error.error);
          resolve(err.error.error);
        }
      );
    });
  }

  deleteProof(proofId:number): Observable<any>{
    return this.http.delete<any>(`${this.domainName}/proofs/${proofId}`);
  }

  acceptProof(proofId:number): Observable<any>{   
    return this.http.post<any>(`${this.domainName}/proofs/${proofId}/accept`, {});
  }

  rejectProof(proofId:number): Observable<any>{
    return this.http.post<any>(`${this.domainName}/proofs/${proofId}/reject`, {});
  }
}
