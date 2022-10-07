import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Book } from 'src/models/book.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-add-newbook',
  templateUrl: './dialog-add-newbook.component.html',
  styleUrls: ['./dialog-add-newbook.component.scss'],
})
export class DialogAddNewbookComponent implements OnInit {
  book = new Book();
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAddNewbookComponent>,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {}

  saveBook() {
    console.log(this.book);
    this.loading = true;
    this.firestore
      .collection('book')
      .add(this.book.toJSON())
      .then((resul: any) => {
        this.loading = false;
        console.log(resul);
        this.dialogRef.close();
      });
  }
}
