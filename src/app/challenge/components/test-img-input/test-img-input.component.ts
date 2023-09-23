import { Component } from '@angular/core';

@Component({
  selector: 'app-test-img-input',
  templateUrl: './test-img-input.component.html',
  styleUrls: ['./test-img-input.component.css']
})
export class TestImgInputComponent {
  selectedImages: string[] = [];
  maxHeight: number = 300; // Définissez la hauteur maximale souhaitée en pixels

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    const maxFileSize = 8 * 1024 * 1024; // 8 Mo en octets
    let totalFileSize = 0;
    const imageBlobs: Blob[] = [];

    if (files && files.length > 0) {
      this.selectedImages = []; // Réinitialisez la liste des images sélectionnées

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Vérifiez si le fichier est une image
        if (file.type.startsWith('image/')) {
          totalFileSize += file.size; // Ajoutez la taille du fichier à la somme

          // Vérifiez si la somme des tailles est inférieure ou égale à la limite
          if (totalFileSize <= maxFileSize) {
            imageBlobs.push(file); // Ajoutez le Blob du fichier à la liste des imageBlobs
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
}
