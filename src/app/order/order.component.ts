import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DialogAddNewbookComponent } from '../dialog-add-newbook/dialog-add-newbook.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from 'src/models/book.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { DialogOrderDetailsComponent } from '../dialog-order-details/dialog-order-details.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements AfterViewInit {
  book = new Book();
  allBooks = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private firestore: AngularFirestore, public dialog: MatDialog) {}

  ngAfterViewInit() {}

  ngOnInit(): void {
    this.firestore
      .collection('book')
      .valueChanges({ idField: 'bookId' })
      .subscribe((changes: any) => {
        console.log('Test', changes);
        this.allBooks = changes;
      });
  }

  openDialog() {
    this.dialog.open(DialogAddNewbookComponent);
  }

  openDialogOrder() {
    this.dialog.open(DialogOrderDetailsComponent);
  }

  /*
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  */
}
