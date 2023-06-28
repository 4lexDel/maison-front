import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from 'src/app/core/models/house.model';
import { HouseService } from '../../services/house.service';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  @Input() isAdmin: boolean = false;

  houseList$!:Observable<House[]>;

  confirmationDialogVisible: boolean = false;


  constructor(private houseService: HouseService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.houseList$ = this.houseService.getHouseList();
  }

  getHouseByID(id:number){
    this.router.navigateByUrl(`/houses/${id}`);
  }

  updateHouse(id:number){
    this.router.navigateByUrl(`/houses/${id}/update`);
  }

  deleteHouse(){

  }

  openConfirmationDialog() {
    this.confirmationDialogVisible = true;
  }

  onConfirmation(confirmed: boolean) {
    this.confirmationDialogVisible = false;

    if (confirmed) {
      // L'action confirmée
      console.log('Action confirmée');
    } else {
      // L'action annulée
      console.log('Action annulée');
    }
  }
}
