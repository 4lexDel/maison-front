import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {
  public confirmMessage!:string;
  
  constructor(public dialogRef: MdDialogRef<ConfirmationDialogComponent>) {}

  ngOnInit(): void {
  }

}
