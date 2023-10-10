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
  
  constructor(private router: Router, private formBuilder: FormBuilder, private houseService: HouseService) { }

  async ngOnInit(): Promise<void> {
    this.createHouseForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      houseImg: [null, [Validators.required]],
      score: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  async onSubmitForm() {
    if(this.createHouseForm.valid){
      this.process = true;

      let newHouse = this.createHouseForm.value;

      newHouse = {
        ...newHouse,
        houseImg: this.files[0],    // only one
      }

      const formData = new FormData();

      Object.keys(newHouse).forEach(key => {
        formData.append(key, newHouse[key]);
      });
        
      this.houseService.addHouse(formData).subscribe((res) =>{
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
