import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from 'src/app/core/models/house.model';
import { HouseService } from '../../services/house.service';
import { Router } from '@angular/router';
import { ConfirmationPopupComponent } from 'src/app/shared/components/confirmation-popup/confirmation-popup.component';


@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  @Input() isAdmin: boolean = false;

  houseList$!:Observable<House[]>;

  @ViewChild('confirmationPopup') confirmationPopup!: ConfirmationPopupComponent;
  houseToDelete!:number;

  constructor(private houseService: HouseService, private router: Router) { }

  ngOnInit(): void {
    this.updateHouseList();
  }

  addHouse(): void {
    this.houseList$ = this.houseService.getHouseList();
    this.router.navigateByUrl(`/houses/add`);
  }

  updateHouseList(): void {
    this.houseList$ = this.houseService.getHouseList();
  }

  getHouseByID(id:number){
    this.router.navigateByUrl(`/houses/${id}`);
  }

  updateHouse(id:number){
    this.router.navigateByUrl(`/houses/${id}/update`);
  }

  openConfirmationDialog(id:number) {
    this.houseToDelete = id;
    this.confirmationPopup.open();
  }

  onDeleteConfirmation(confirmed: boolean) {
    if (confirmed) {
      this.houseService.deleteHouse(this.houseToDelete).subscribe((res) => {
        this.updateHouseList();
      });
    }
  }
}
