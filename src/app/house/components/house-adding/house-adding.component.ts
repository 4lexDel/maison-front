import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseService } from '../../services/house.service';
import { lastValueFrom } from 'rxjs';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

@Component({
  selector: 'app-house-adding',
  templateUrl: './house-adding.component.html',
  styleUrls: ['./house-adding.component.css']
})
export class HouseAddingComponent {
  @ViewChild("dangerAlert") dangerAlert!: AlertComponent;

  createHouseForm!: FormGroup;
  process:boolean = false;
  houseId!:number;
  
  constructor(private router: Router, private formBuilder: FormBuilder, private houseService: HouseService) { }

  async ngOnInit(): Promise<void> {
    this.createHouseForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      score: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  async onSubmitForm() {
    if(this.createHouseForm.valid){
      this.process = true;

      let newHouse = this.createHouseForm.value;
  
      console.log(newHouse);
      
      this.houseService.addHouse(newHouse).subscribe((res) =>{
        this.process = false;
  
        this.router.navigateByUrl(`/houses`);
      },
      (error) => {
        this.process = false;
        
        this.dangerAlert.activateAlert(2, error.error["message"]);
      });
    }
  }
}
