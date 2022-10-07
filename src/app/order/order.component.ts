import { Component, OnInit } from '@angular/core';
import { DialogAddNewbookComponent } from '../dialog-add-newbook/dialog-add-newbook.component';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/models/book.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  book = new Book();
  allBooks = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.firestore
      .collection('book')
      .valueChanges({ idField: 'BookId' })
      .subscribe((changes: any) => {
        console.log('Test', changes);
        this.allBooks = changes;
      });
  }

  openDialog() {
    this.dialog.open(DialogAddNewbookComponent);
  }
}
