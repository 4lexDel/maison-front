import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengeService } from '../../services/challenge.service';
import { Observable, lastValueFrom } from 'rxjs';
import { HouseService } from 'src/app/house/services/house.service';
import { ProofService } from '../../services/proof.service';
import { Challenge } from 'src/app/core/models/challenge.model';
import { House } from 'src/app/core/models/house.model';

@Component({
  selector: 'app-proof-adding',
  templateUrl: './proof-adding.component.html',
  styleUrls: ['./proof-adding.component.css']
})
export class ProofAddingComponent implements OnInit {
  createProofForm!: FormGroup;
  process: boolean = false;

  challengeId!: number;

  challenge$!: Observable<Challenge>;

  houseList$!: Observable<House[]>;

  @ViewChild('imageUpload', { static: false }) imageUpload: ElementRef = new ElementRef({});
  imgReader:FileReader = new FileReader();

  onImageUploadChange(event: Event) {
    console.log("change");
    
    const previewContainer = document.getElementById('image-preview');

    if (previewContainer) {
      previewContainer.innerHTML = '';

      const files = (event.target as HTMLInputElement).files;

      if (files) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];

          this.imgReader.onload = (e: any) => {
            const imageElement = document.createElement('img');
            imageElement.src = e.target.result;
            imageElement.classList.add('preview-image');

            // Redimensionner l'image
            imageElement.onload = () => {
              //console.log("draw");
              
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');

              const { width, height } = this.calculateAspectRatioFit(imageElement.width, imageElement.height, 200, 200);
              canvas.width = width;
              canvas.height = height;

              ctx?.drawImage(imageElement, 0, 0, width, height);

              imageElement.src = canvas.toDataURL(); // Remplace l'URL de l'image par l'image redimensionnée

              previewContainer.appendChild(imageElement);
            };

            previewContainer.appendChild(imageElement);
          };

          this.imgReader.readAsDataURL(file);
        }
      }
    }
  }

  removeAllImages() {
    const previewContainer = document.getElementById('image-preview');
    if(previewContainer) previewContainer.innerHTML = ''; 

    this.imgReader = new FileReader();
  }
  

  calculateAspectRatioFit(srcWidth:number, srcHeight:number, maxWidth:number, maxHeight:number) {
    const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    return { width: srcWidth * ratio, height: srcHeight * ratio };
  }

  constructor(private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private challengeService: ChallengeService, private houseService: HouseService, private proofService: ProofService) { }

  async ngOnInit(): Promise<void> {
    this.createProofForm = this.formBuilder.group({
      proofImg: [null, [Validators.required]],
      description: [null, [Validators.required]],
      challengerName: [null, [Validators.required]],
      idHouse: [null, [Validators.required]]
    });

    this.challengeId = this.activatedRoute.snapshot.params['id'];

    this.houseList$ = this.houseService.getHouseList();
    this.challenge$ = this.challengeService.getChallengeByID(this.challengeId);

    //this.createProofForm.patchValue(challengeData);
  }

  onHouseChange($event: any) {
    let selectedValue = $event.target.value;

    this.createProofForm?.get('idHouse')?.setValue(selectedValue);
  }

  async onSubmitForm() {
    if (this.createProofForm.valid) {
      this.process = true;
      let newChallenge = this.createProofForm.value;

      console.log(newChallenge);

      let newHouseReceive = await lastValueFrom(this.challengeService.updateChallenge(newChallenge, this.challengeId));
      this.router.navigateByUrl(`/challenges/${this.challengeId}`);

      this.process = false;
    }
  }
}
