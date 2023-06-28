import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { RouterModule } from '@angular/router';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';  
import { MatButtonModule } from '@angular/material';
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BackButtonComponent,
    ConfirmationDialogComponent,
    ConfirmationPopupComponent
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
    ConfirmationDialogComponent,
    ConfirmationPopupComponent
  ],
})
export class SharedModule { }
