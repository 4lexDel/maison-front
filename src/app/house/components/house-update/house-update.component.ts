import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { HouseService } from '../../services/house.service';

@Component({
  selector: 'app-house-update',
  templateUrl: './house-update.component.html',
  styleUrls: ['./house-update.component.css']
})
export class HouseUpdateComponent implements OnInit {
  updateHouseForm!: FormGroup;
  process:boolean = false;
  houseId!:number;
  
  constructor(private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private houseService: HouseService) { }

  async ngOnInit(): Promise<void> {
    this.updateHouseForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      score: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });

    this.houseId = this.activatedRoute.snapshot.params['id'];

    let houseData = await lastValueFrom(this.houseService.getHouseByID(this.houseId));

    this.updateHouseForm.patchValue(houseData);
  }

  async onSubmitForm() {
    if(this.updateHouseForm.valid){
      this.process = true;
      let newHouse = this.updateHouseForm.value;
  
      console.log(newHouse);
      
      let newHouseReceive = await lastValueFrom(this.houseService.updateHouse(newHouse, this.houseId));
      this.router.navigateByUrl(`/houses/${this.houseId}`);
  
      this.process = false;
    }
  }
}
