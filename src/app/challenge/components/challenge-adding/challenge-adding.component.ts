import { Component, ViewChild } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

@Component({
  selector: 'app-challenge-adding',
  templateUrl: './challenge-adding.component.html',
  styleUrls: ['./challenge-adding.component.css']
})
export class ChallengeAddingComponent {
  @ViewChild("dangerAlert") dangerAlert!: AlertComponent;

  createChallengeForm!: FormGroup;
  process:boolean = false;
  houseId!:number;
  
  constructor(private router: Router, private formBuilder: FormBuilder, private challengeService: ChallengeService) { }

  async ngOnInit(): Promise<void> {
    this.createChallengeForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      expiration: [null, [Validators.required]],
      award: [null, [Validators.required]],
      success: [0, [Validators.required]],
    });
  }

  async onSubmitForm() {
    if(this.createChallengeForm.valid){
      this.process = true;

      let newChallenge = this.createChallengeForm.value;
  
      console.log(newChallenge);
      
      this.challengeService.addChallenge(newChallenge).subscribe((res) =>{
        this.process = false;
  
        this.router.navigateByUrl(`/challenges`);
      },
      (error) => {
        this.process = false;
        
        this.dangerAlert.activateAlert(2, error.error["message"]);
      });
    }
  }
}
