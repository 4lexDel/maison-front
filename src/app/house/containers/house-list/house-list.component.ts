import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from 'src/app/core/models/house.model';
import { HouseService } from '../../services/house.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  @Input() isAdmin: boolean = false;

  houseList$!:Observable<House[]>;

  constructor(private houseService: HouseService, private router: Router) { }

  ngOnInit(): void {
    this.houseList$ = this.houseService.getHouseList();
  }

  getHouseByID(id:number){
    this.router.navigateByUrl(`/houses/${id}`);
  }
}
