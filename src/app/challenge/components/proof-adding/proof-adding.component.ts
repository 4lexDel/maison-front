import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengeService } from '../../services/challenge.service';
import { Observable } from 'rxjs';
import { HouseService } from 'src/app/house/services/house.service';
import { ProofService } from '../../services/proof.service';
import { Challenge } from 'src/app/core/models/challenge.model';
import { House } from 'src/app/core/models/house.model';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

@Component({
  selector: 'app-proof-adding',
  templateUrl: './proof-adding.component.html',
  styleUrls: ['./proof-adding.component.css']
})
export class ProofAddingComponent implements OnInit {
  @ViewChild("dangerAlert") dangerAlert!: AlertComponent;

  createProofForm!: FormGroup;
  process: boolean = false;

  challengeId!: number;

  challenge$!: Observable<Challenge>;

  houseList$!: Observable<House[]>;

  selectedImages: string[] = [];

  files!: FileList;

  onFileSelected(event: any) {
    this.files = event.target.files;
    const maxFileSize = 5 * 1024 * 1024; // 8 Mo en octets
    let totalFileSize = 0;

    if (this.files && this.files.length > 0) {
      this.selectedImages = []; // Réinitialisez la liste des images sélectionnées

      for (let i = 0; i < this.files.length; i++) {
        const file = this.files[i];

        // Vérifiez si le fichier est une image
        if (file.type.startsWith('image/')) {
          totalFileSize += file.size; // Ajoutez la taille du fichier à la somme

          // Vérifiez si la somme des tailles est inférieure ou égale à la limite
          if (totalFileSize <= maxFileSize) {
            const reader = new FileReader();

            reader.onload = (e: any) => {
              // Ajoutez l'URL de l'image à la liste des images sélectionnées (facultatif)
              this.selectedImages.push(e.target.result);
            };

            reader.readAsDataURL(file);
          } else {
            // Affichez un message d'erreur si la somme des tailles dépasse la limite
            console.log(`La taille totale des images dépasse la limite de 8 Mo.`);
            break; // Arrêtez le traitement des fichiers restants
          }
        } else {
          // Affichez un message d'erreur si le fichier n'est pas une image
          console.log(`Le fichier ${file.name} n'est pas une image.`);
        }
      }
    }
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
  }

  onHouseChange($event: any) {
    let selectedValue = $event.target.value;

    this.createProofForm?.get('idHouse')?.setValue(selectedValue);
  }

  async onSubmitForm() {
    if (this.createProofForm.valid) {
      this.process = true;

      let newProof = this.createProofForm.value;

      newProof = {
        ...newProof,
        proofImg: this.files[0],    // only one
        idChallenge: this.challengeId
      }

      const formData = new FormData();

      Object.keys(newProof).forEach(key => {
        formData.append(key, newProof[key]);
      });
      
      let response = await this.proofService.addProof(formData);
      
      this.process = false;

      if(response == "1"){
        this.router.navigateByUrl(`/challenges`);
      }
      else{
        this.dangerAlert.activateAlert(2, response);
      }
    }
  }
}
