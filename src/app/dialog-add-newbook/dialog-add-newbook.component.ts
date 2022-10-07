import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-newbook',
  templateUrl: './dialog-add-newbook.component.html',
  styleUrls: ['./dialog-add-newbook.component.scss'],
})
export class DialogAddNewbookComponent implements OnInit {
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddNewbookComponent>) {}

  ngOnInit(): void {}

  saveUser() {
    setTimeout(() => {
      this.loading = true;
      this.dialogRef.close();
    }, 3000);
  }
}
