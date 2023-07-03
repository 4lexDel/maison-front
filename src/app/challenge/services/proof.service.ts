import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.service';
import { Challenge } from 'src/app/core/models/challenge.model';
import { Proof } from 'src/app/core/models/proof.model';

@Injectable({
  providedIn: 'root'
})
export class ProofService {
  domainName!:string; 

  constructor(private http: HttpClient, private authService: AuthService) { 
    this.domainName = authService.getDomainName();
  }

  getProofList(): Observable<Proof[]>{
    return this.http.get<Proof[]>(`${this.domainName}/proofs`);
  }

  getProofByID(id:number): Observable<Proof>{
    return this.http.get<Proof>(`${this.domainName}/proofs/${id}`);
  }

  addProof(createdProof: Proof): Observable<Proof>{
    return this.http.post<Proof>(`${this.domainName}/proofs/`, createdProof);
  }

  deleteProof(proofId:number): Observable<any>{
    return this.http.delete<any>(`${this.domainName}/proofs/${proofId}`);
  }
}
