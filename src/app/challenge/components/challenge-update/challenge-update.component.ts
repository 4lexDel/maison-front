import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ChallengeService } from '../../services/challenge.service';

@Component({
  selector: 'app-house-update',
  templateUrl: './challenge-update.component.html',
  styleUrls: ['./challenge-update.component.css']
})
export class ChallengeUpdateComponent implements OnInit {
  updateChallengeForm!: FormGroup;
  process:boolean = false;
  challengeId!:number;
  
  constructor(private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private challengeService: ChallengeService) { }

  async ngOnInit(): Promise<void> {
    this.updateChallengeForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      expiration: [null, [Validators.required]],
      award: [null, [Validators.required]],
      success: [null, [Validators.required]],
    });

    this.challengeId = this.activatedRoute.snapshot.params['id'];

    let challengeData = await lastValueFrom(this.challengeService.getChallengeByID(this.challengeId));

    this.updateChallengeForm.patchValue(challengeData);
  }

  async onSubmitForm() {
    if(this.updateChallengeForm.valid){
      this.process = true;
      let newChallenge = this.updateChallengeForm.value;
  
      console.log(newChallenge);
      
      let newHouseReceive = await lastValueFrom(this.challengeService.updateChallenge(newChallenge, this.challengeId));
      this.router.navigateByUrl(`/challenges/${this.challengeId}`);
  
      this.process = false;
    }
  }
}
