import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.service';
import { Challenge } from 'src/app/core/models/challenge.model';
import { ProofDetail } from 'src/app/core/models/proofDetail.model';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  domainName!:string; 

  constructor(private http: HttpClient, private authService: AuthService) { 
    this.domainName = authService.getDomainName();
  }

  getChallengeList(): Observable<Challenge[]>{
    return this.http.get<Challenge[]>(`${this.domainName}/challenges`);
  }

  getChallengeByID(id:number): Observable<Challenge>{
    return this.http.get<Challenge>(`${this.domainName}/challenges/${id}`);
  }

  addChallenge(createdChallenge: Challenge): Observable<Challenge>{
    return this.http.post<Challenge>(`${this.domainName}/challenges/`, createdChallenge);
  }

  updateChallenge(updatedChallenge: Challenge, challengeId:number): Observable<Challenge>{
    return this.http.put<Challenge>(`${this.domainName}/challenges/${challengeId}`, updatedChallenge)
  }

  deleteChallenge(challengeId:number): Observable<any>{
    return this.http.delete<any>(`${this.domainName}/challenges/${challengeId}`);
  }

  getProofList(): Observable<ProofDetail[]>{
    return this.http.get<ProofDetail[]>(`${this.domainName}/proofs`);
  }

  addProof(createdProof: any): Observable<any>{
    console.log("HTTP REQUEST");
    console.log(createdProof);
    
    return this.http.post(`${this.domainName}/proofs/`, createdProof);/*, options*/
  }
}
