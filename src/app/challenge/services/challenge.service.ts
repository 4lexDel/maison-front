import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from '../../core/models/house.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.service';
import { Challenge } from 'src/app/core/models/challenge.model';

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

  updateChallenge(updatedChallenge: Challenge, challengeId:number): Observable<Challenge>{
    return this.http.put<Challenge>(`${this.domainName}/challenges/${challengeId}`, updatedChallenge)
  }
}