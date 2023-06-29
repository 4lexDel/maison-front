import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.css']
})
export class ConfirmationPopupComponent {
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() textPopup!:string;

  isVisible: boolean = false;

  open(){
    this.isVisible = true;
  }

  confirm() {
    this.confirmed.emit(true);
    this.isVisible = false;
  }

  cancel() {
    this.confirmed.emit(false);
    this.isVisible = false;
  }
}