import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';
import { House } from 'src/app/core/models/house.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  house$!:Observable<House>;

  constructor(private houseService: HouseService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    let houseId = this.activatedRoute.snapshot.params['id'];
    
    this.house$ = this.houseService.getHouseByID(houseId);  
    
    // this.house$.subscribe(house => {
    //   console.log(house);
    // });
  }

}
