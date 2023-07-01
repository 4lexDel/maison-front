import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() message!: string;
  @Input() alertType: string = "info";

  isActive:boolean = false;

  activateAlert(seconds: number, message:any=null): void {
    if(message) this.message = message;
console.log("-----------alert------------");

    this.isActive = true;
    setTimeout(() => {
      this.isActive = false;
    }, seconds * 1000);
  }
}
