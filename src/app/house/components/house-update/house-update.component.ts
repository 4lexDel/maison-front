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
  
  constructor(private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private houseService: HouseService) { }

  async ngOnInit(): Promise<void> {
    this.updateHouseForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      houseImg: [null, [Validators.required]],
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
  
      newHouse = {
        ...newHouse,
        houseImg: this.files[0],    // only one
      }

      const formData = new FormData();

      Object.keys(newHouse).forEach(key => {
        formData.append(key, newHouse[key]);
      });
      
      let newHouseReceive = await lastValueFrom(this.houseService.updateHouse(formData, this.houseId));
      this.router.navigateByUrl(`/houses/${this.houseId}`);
  
      this.process = false;
    }
  }
}
