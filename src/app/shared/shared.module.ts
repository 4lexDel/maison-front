import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { RouterModule } from '@angular/router';
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';
import { AlertComponent } from './components/alert/alert.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BackButtonComponent,
    ConfirmationPopupComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    BackButtonComponent,
    ConfirmationPopupComponent,
    AlertComponent
  ],
})
export class SharedModule { }
