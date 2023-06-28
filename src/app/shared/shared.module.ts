import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { RouterModule } from '@angular/router';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';  
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    HeaderComponent,
    BackButtonComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
    BackButtonComponent,
    ConfirmationDialogComponent
  ],
})
export class SharedModule { }
