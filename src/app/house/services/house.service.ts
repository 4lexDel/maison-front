import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from '../../core/models/house.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  domainName!:string; 

  constructor(private http: HttpClient, private authService: AuthService) { 
    this.domainName = authService.getDomainName();
  }

  getHouseList(): Observable<House[]>{
    return this.http.get<House[]>(`${this.domainName}/houses`);
  }

  getHouseByID(id:number): Observable<House>{
    return this.http.get<House>(`${this.domainName}/houses/${id}`);
  }

  addHouse(createdHouse: House): Observable<House>{
    return this.http.post<House>(`${this.domainName}/houses/`, createdHouse);
  }

  updateHouse(updatedHouse: House, houseId:number): Observable<House>{
    return this.http.put<House>(`${this.domainName}/houses/${houseId}`, updatedHouse);
  }

  deleteHouse(houseId:number): Observable<any>{
    return this.http.delete<any>(`${this.domainName}/houses/${houseId}`);
  }
}
