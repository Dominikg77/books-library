import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/models/book.class';

@Component({
  selector: 'app-dialog-order-details',
  templateUrl: './dialog-order-details.component.html',
  styleUrls: ['./dialog-order-details.component.scss'],
})
export class DialogOrderDetailsComponent implements OnInit {
  bookId = '';
  book: Book = new Book();
  loading = false;

  constructor(
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<DialogOrderDetailsComponent>,
    private firestore: AngularFirestore,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.bookId = paramMap.get('id');
      this.getUser();
      console.log('id', this.bookId);
    });
  }

  getUser() {
    if (this.bookId) {
      this.firestore
        .collection('book')
        .doc(this.bookId)
        .valueChanges()
        .subscribe((book: any) => {
          this.book = new Book(book);
          console.log('ref', this.book);
        });
    }
  }

  addOrder() {
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
