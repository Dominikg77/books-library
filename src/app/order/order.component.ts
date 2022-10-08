import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DialogAddNewbookComponent } from '../dialog-add-newbook/dialog-add-newbook.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from 'src/models/book.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';

export interface UserData {
  bookTitel: string;
  autorName: string;
  link: string;
  category: string;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements AfterViewInit {
  book = new Book();
  allBooks = [];

  displayedColumns: string[] = ['bookTitel', 'autorName', 'category', 'link'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private firestore: AngularFirestore, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.allBooks);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog() {
    this.dialog.open(DialogAddNewbookComponent);
  }

  ngOnInit(): void {
    this.firestore
      .collection('book')
      .valueChanges({ idField: 'BookId' })
      .subscribe((changes: any) => {
        console.log('Test', changes);
        this.allBooks = changes;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
