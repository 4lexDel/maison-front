import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { RouterModule } from '@angular/router';
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BackButtonComponent,
    ConfirmationPopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    BackButtonComponent,
    ConfirmationPopupComponent
  ],
})
export class SharedModule { }
