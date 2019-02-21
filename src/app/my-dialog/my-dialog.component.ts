import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import {MatSnackBar} from '@angular/material';
import { AnsverSaveComponent } from '../snackbar-demo/snackbar-demo.component';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {

  ansver: string;
  private snackBar: MatSnackBar;
  constructor(public thisDialogRef: MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  send() {
    this.thisDialogRef.close(this.ansver);
    this.snackBar.openFromComponent(AnsverSaveComponent, {
      duration: 500,
    });
  }

}

